const connection = require('../Connection')
const axios  = require('axios');
const {Web3} = require('web3');

const web3 = new Web3("https://mainnet.infura.io/v3/2dc522a3296c4d0a8d6d535181a1c873"); 


const TransactionHistory = async (req, res)=>{

const address  = req.body.address

    // const address = '0x708cA0E206Cf35A5A228F3676E5700869a28d975'; 


// Get the recent transactions of the account
coreHelpers.eth.getTransactionsByAddress(web3, address)
  
.then((transactions) => {

  console.log('Recent Transactions:');

  console.log(transactions);

})
.catch((error) => {
    console.error('Error fetching transactions:', error);
  });




    
        
}

module.exports = TransactionHistory;