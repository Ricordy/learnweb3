require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
    solidity: "0.8.4",
    networks: {
        mumbai: {
            url: ALCHEMY_API_KEY_URL,
            accounts: [MUMBAI_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            polygonMumbai: POLYGONSCAN_KEY,
        },
    },
};