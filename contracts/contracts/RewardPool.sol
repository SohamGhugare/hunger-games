// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RewardPool {
    address public owner;
    uint256 public entryFee;
    
    // Tracks game-specific reward pools
    mapping(uint256 => uint256) public gamePools;
    // Tracks player deposits to prevent double-entry
    mapping(uint256 => mapping(address => bool)) public hasJoined;

    event JoinedGame(uint256 indexed gameId, address indexed player, uint256 amount);
    event PayoutIssued(uint256 indexed gameId, address indexed winner, uint256 amount);
    event RefundIssued(uint256 indexed gameId, address indexed player, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(uint256 _entryFee) {
        owner = msg.sender;
        entryFee = _entryFee;
    }

    /// @notice Player joins a game by depositing entry fee
    function joinGame(uint256 gameId) external payable {
        require(msg.value == entryFee, "Incorrect fee");
        require(!hasJoined[gameId][msg.sender], "Already joined");

        hasJoined[gameId][msg.sender] = true;
        gamePools[gameId] += msg.value;

        emit JoinedGame(gameId, msg.sender, msg.value);
    }

    /// @notice Owner sends total reward to winner at end of game
    function payoutWinner(uint256 gameId, address winner) external onlyOwner {
        uint256 pool = gamePools[gameId];
        require(pool > 0, "No funds in pool");

        gamePools[gameId] = 0;
        payable(winner).transfer(pool);

        emit PayoutIssued(gameId, winner, pool);
    }

    /// @notice Emergency refund if game fails or doesn't start
    function refundPlayers(uint256 gameId, address[] calldata players) external onlyOwner {
        uint256 refundPerPlayer = entryFee;

        for (uint i = 0; i < players.length; i++) {
            address player = players[i];
            if (hasJoined[gameId][player]) {
                hasJoined[gameId][player] = false;
                gamePools[gameId] -= refundPerPlayer;
                payable(player).transfer(refundPerPlayer);
                emit RefundIssued(gameId, player, refundPerPlayer);
            }
        }
    }

    /// @notice Update entry fee (admin)
    function updateEntryFee(uint256 newFee) external onlyOwner {
        entryFee = newFee;
    }

    /// @notice Allow contract to receive Ether
    receive() external payable {}
}
