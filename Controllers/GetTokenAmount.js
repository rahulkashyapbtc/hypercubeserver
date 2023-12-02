const connection = require('../Connection')
const axios  = require('axios');
const {Web3} = require('web3');

const web3 = new Web3("https://mainnet.infura.io/v3/2dc522a3296c4d0a8d6d535181a1c873"); 

const GetTokenAmount = async (req, res)=>{


// const walletAddress = "0x708cA0E206Cf35A5A228F3676E5700869a28d975"; 

const walletAddress  = req.body.walletAddress;

const tokenContractAddress = req.body.tokenContractAddress;

async function getBalance() {
 
  try {
  
    // Replace with your token contract address
    // const tokenContractAddress = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';

    // Replace with your wallet address
    const myWalletAddress = walletAddress;

    // Get ERC-20 token balance
    const tokenContract = new web3.eth.Contract([
      { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" }
    ], tokenContractAddress);

    const tokenBalance = await tokenContract.methods.balanceOf(walletAddress).call();
    console.log(`Token Balance: ${tokenBalance} Tokens`);
  } catch (error) {
    console.error('Error:', error);
  }
}

getBalance();

    
        
}

module.exports = GetTokenAmount;