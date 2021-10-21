const { ethers } = require('hardhat');
const hre = require('hardhat');
const chai = require('chai');
const { solidity } = require('ethereum-waffle');
const { BN } = require("@openzeppelin/test-helpers");
chai.use(solidity);
const { expect } = chai;

let signers;
let factoryAddress;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  signers = await ethers.getSigners();

  const CampaignFactory = await ethers.getContractFactory("CampaignFactory", signers[0])
  factory = await CampaignFactory.deploy()
  await factory.deployed()
  factoryAddress = factory.address
  console.log(factoryAddress)

  // const createTx = await factory.createCampaign("100")
  // await createTx.wait()

  [campaignAddress] = await factory.getDeployedCampaigns()
  console.log('campaignAddress', campaignAddress)
  // campaign = await ethers.getContractAt("Campaign", campaignAddress)
});

describe("Campaigns", function () {
  it("deploys a factory and a campaign", async function () {
    [campaignAddress] = await factory.getDeployedCampaigns()
    // expect(campaignAddress).to.be.not.undefined;
    // expect(campaignAddress).to.be.not.null;
    // expect(factoryAddress).to.be.not.undefined;
    // expect(factoryAddress).to.be.not.null;
    // console.log(campaignAddress.toAddress())
    // console.log(factoryAddress.toAddress())
  });

  // it('marks caller as the campaign manager', async () => {
  //   const manager = await campaign.methods.manager().call();
  //   assert.equal(accounts[0], manager);
  // });
  //
  // it('allows people to contribute money and marks them as approvers', async () => {
  //   await campaign.methods.contribute().send({
  //     value: '200',
  //     from: accounts[1]
  //   });
  //   const isContributor = await campaign.methods.approvers(accounts[1]).call();
  //   assert(isContributor);
  // });
  //
  // it('requires a minimum contribution', async () => {
  //   try {
  //     await campaign.methods.contribute().send({
  //       value: '5',
  //       from: accounts[1]
  //     });
  //     assert(false);
  //   } catch (err) {
  //     assert(err);
  //   }
  // });
  //
  // it('allows a manager to make a payment request', async () => {
  //   await campaign.methods
  //       .createRequest('Buy batteries', '100', accounts[1])
  //       .send({
  //         from: accounts[0],
  //         gas: '1000000'
  //       });
  //   const request = await campaign.methods.requests(0).call();
  //
  //   assert.equal('Buy batteries', request.description);
  // });
  //
  // it('processes requests', async () => {
  //   await campaign.methods.contribute().send({
  //     from: accounts[0],
  //     value: web3.utils.toWei('10', 'ether')
  //   });
  //
  //   await campaign.methods
  //       .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
  //       .send({ from: accounts[0], gas: '1000000' });
  //
  //   await campaign.methods.approveRequest(0).send({
  //     from: accounts[0],
  //     gas: '1000000'
  //   });
  //
  //   await campaign.methods.finalizeRequest(0).send({
  //     from: accounts[0],
  //     gas: '1000000'
  //   });
  //
  //   let balance = await web3.eth.getBalance(accounts[1]);
  //   balance = web3.utils.fromWei(balance, 'ether');
  //   balance = parseFloat(balance);
  //
  //   assert(balance > 104);
  // });
});
