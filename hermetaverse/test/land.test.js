const Land = artifacts.require("./Land")

require('chai').use(require('chai-as-promised')).should()

contract("Land", () => {
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
    });
});