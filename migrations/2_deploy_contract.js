const Dummy_token = artifacts.require("Dummy");
const Tether_token = artifacts.require("Tether");
const Staking_dapp = artifacts.require("staking_dapp");

module.exports = async function (deployer, network, accounts) {

    await deployer.deploy(Tether_token)
    const tether_token = await Tether_token.deployed()

    await deployer.deploy(Dummy_token)
    const dummy_token = await Dummy_token.deployed()

    await deployer.deploy(Staking_dapp, Dummy_token.address, Tether_token.address)
    const staking_dapp = await Staking_dapp.deployed()

    await dummy_token.transfer(staking_dapp.address, '10000000000000000000')

    await tether_token.transfer(staking_dapp.address, '100000000000000000')
}
