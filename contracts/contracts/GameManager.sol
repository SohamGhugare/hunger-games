// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./GameSimulation.sol";

contract GameManager {
    address public owner;
    uint256 public gameCount;

    enum GameState { Waiting, Active, Completed }

    struct GameInfo {
        address gameAddress;
        GameState state;
        address[] players;
    }

    mapping(uint256 => GameInfo) public games;

    event GameCreated(uint256 indexed gameId, address gameAddress);
    event PlayerJoined(uint256 indexed gameId, address player);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function createGame(uint256 maxPlayers) external onlyOwner returns (uint256) {
        GameSimulation newGame = new GameSimulation(maxPlayers, address(this));
        uint256 newGameId = ++gameCount;

        games[newGameId] = GameInfo({
            gameAddress: address(newGame),
            state: GameState.Waiting,
            players: new address 
        });

        emit GameCreated(newGameId, address(newGame));
        return newGameId;
    }

    function joinGame(uint256 gameId) external {
        GameInfo storage game = games[gameId];
        require(game.state == GameState.Waiting, "Game not joinable");

        game.players.push(msg.sender);
        GameSimulation(game.gameAddress).registerPlayer(msg.sender);

        emit PlayerJoined(gameId, msg.sender);
    }

    function startGame(uint256 gameId) external onlyOwner {
        GameInfo storage game = games[gameId];
        require(game.state == GameState.Waiting, "Invalid state");

        game.state = GameState.Active;
        GameSimulation(game.gameAddress).start();
    }

    function endGame(uint256 gameId) external onlyOwner {
        GameInfo storage game = games[gameId];
        game.state = GameState.Completed;
    }

    function getPlayers(uint256 gameId) external view returns (address[] memory) {
        return games[gameId].players;
    }
}
