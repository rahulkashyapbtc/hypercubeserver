const connection = require('../Connection')
const axios  = require('axios');
const { json } = require('body-parser');
const {Web3} = require('web3');

const web3 = new Web3("https://mainnet.infura.io/v3/2dc522a3296c4d0a8d6d535181a1c873"); 


const GetTotalAmount = async (req, res)=>{

   const walletAddress = req.body.walletAddress;

        
        // Get ETH balance
        const balanceWei = await web3.eth.getBalance(walletAddress);
        const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
        console.log(`ETH Balance: ${balanceEther} ETH`);
        res.json({msg:balanceEther})
    
     
    
   
    
    
  
    



    
        
}

module.exports = GetTotalAmount;