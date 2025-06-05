// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GameSimulation {
    address public manager;
    uint256 public round;
    uint256 public maxPlayers;
    bool public started;

    mapping(address => bool) public isPlayer;
    mapping(uint256 => mapping(address => string)) public playerChoices; // round => player => action
    address[] public players;

    event PlayerRegistered(address indexed player);
    event ChoiceSubmitted(address indexed player, uint256 indexed round, string choice);
    event RoundResolved(uint256 indexed round);

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    modifier onlyPlayer() {
        require(isPlayer[msg.sender], "Not a player");
        _;
    }

    constructor(uint256 _maxPlayers, address _manager) {
        maxPlayers = _maxPlayers;
        manager = _manager;
    }

    function registerPlayer(address player) external onlyManager {
        require(players.length < maxPlayers, "Max players");
        require(!isPlayer[player], "Already registered");

        players.push(player);
        isPlayer[player] = true;

        emit PlayerRegistered(player);
    }

    function start() external onlyManager {
        started = true;
        round = 1;
    }

    function submitChoice(string calldata choice) external onlyPlayer {
        require(started, "Game not started");
        require(bytes(playerChoices[round][msg.sender]).length == 0, "Already submitted");

        playerChoices[round][msg.sender] = choice;
        emit ChoiceSubmitted(msg.sender, round, choice);
    }

    function resolveRound() external onlyManager {
        // In production, this would include logic for resolving actions
        emit RoundResolved(round);
        round++;
    }

    function getPlayers() external view returns (address[] memory) {
        return players;
    }

    function getChoice(uint256 r, address player) external view returns (string memory) {
        return playerChoices[r][player];
    }
}
