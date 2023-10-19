const stakingDapp = artifacts.require('staking_Dapp')

module.exports = async function (callback) {

    let stakingdapp = await stakingDapp.deployed()
    await stakingdapp.issuedummy()

    console.log("dummy token issue")
    callback()
}