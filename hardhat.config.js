require("@nomiclabs/hardhat-waffle")
require("ethers")
require("dotenv").config()
require("hardhat-deploy")
require("@nomiclabs/hardhat-etherscan")

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // },
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY], //all account is not write here cause hard to maintain so we write in nammedAccounts
      chainId: 4
    }
  },
  namedAccounts: { //here we can set our account on specific chain 
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0,  // this mean that on mainnet our account will be 0 account
    },
    player: {
      default: 1, //for player our account will be 1 
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
