// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

abstract contract VRFManager {
    uint256 internal nonce;

    function getRandomNumber(uint256 salt) internal returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, salt, nonce++)));
    }
}
