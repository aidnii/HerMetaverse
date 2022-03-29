// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Land is ERC721 {
    uint256 public cost = 1 ether;
    uint256 public maxSupply = 5;
    uint256 totalSupply = 0;

    struct Building {
        string name;
        address owner;
        int256 posX;
        int256 posY;
        int256 posZ;
        uint256 sizeX;
        uint256 sizeY;
        uint256 sizeZ;
    }

    Building[] public buildings;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _cost
    ) ERC721(_name, _symbol) {
        cost = _cost;
        // adding the City Hall building
        buildings.push(
            Building("City Hall", address(0x0), 0, 0, 0, 10, 10, 10)
        );

        // adding the Stadium building
        buildings.push(Building("Stadium", address(0x0), 0, 10, 0, 10, 5, 3));

        // adding the University building
        buildings.push(
            Building("University", address(0x0), 0, -10, 0, 10, 5, 3)
        );

        // adding the Shopping Plaza 1 building
        buildings.push(
            Building("Shopping Plaza 1", address(0x0), 10, 0, 0, 5, 25, 5)
        );

        // adding the Shopping Plaza 2 building
        buildings.push(
            Building("Shopping Plaza 2", address(0x0), -10, 0, 0, 5, 25, 5)
        );
    }

    
}

