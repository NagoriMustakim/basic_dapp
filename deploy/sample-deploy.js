const { verify } = require("..//utils/verify");
// console.log(verify);
const { developmentChains } = require("../helper-hardhat-config");
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts(); //this will grap  deployer will default account 0 from hardhat.config.js 
    const arguments = []
    const sample = await deploy("sample", {
        from: deployer,
        log: true,
        args: arguments
    })
    console.log("----------deployed------------")
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(sample.address, arguments)
    }
    try {
        console.log(`deployed at address: ${sample.address}`)
        const networkName = network.name == "hardhat" ? "localnetwork" : network.name
        console.log(`deployed on ${networkName} Network`)

    } catch (error) {
        console.log(error)
    }

}