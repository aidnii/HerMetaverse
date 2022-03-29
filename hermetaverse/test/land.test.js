const Land = artifacts.require("./Land")

require('chai').use(require('chai-as-promised')).should()

contract("Land", ([owner1, owner2]) => {
    const NAME = "Her Metaverse Buildings"
    const SYMBOL = "HMB"
    const COST = web3.utils.toWei('1', 'ether')

    let land, result
   
    beforeEach( async () => {
        land = await Land.new(NAME, SYMBOL, COST)
    });

    describe("Deployment", () => {
        it("Should return the contract name", async () => {
            result = await land.name();
            result.should.equal(NAME);
        });

        it("Should return the symbol", async () => {
            result = await land.symbol();
            result.should.equal(SYMBOL);
        });

        it("Should return the cost to mint", async () => {
            result = await land.cost()
            result.toString().should.equal(COST);
        });

        it("Should return the max supply", async () => {
            result = await land.maxSupply()
            result.toString().should.equal('5');
        });

        it("Should return the number of buildings/land available", async () => {
            result = await land.getBuildings()
            result.length.should.equal(5);
        });
    });

    describe("Mint", () => {
        describe("Success", () => {
            result = land.mint(1, {from: owner1, value: COST});
        });

        it("Should update the owner address", async () => {
            result = land.ownerOf(1);
            result.should.equal(owner1);
        });
    });
});