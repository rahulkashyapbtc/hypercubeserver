const connection = require('../Connection')
const axios  = require('axios');
const {Web3} = require('web3');
const fs = require('fs')

const web3 = new Web3("https://mainnet.infura.io/v3/2dc522a3296c4d0a8d6d535181a1c873"); 

const CreateAccount = async (req, res)=>{




    const account = web3.eth.accounts.create();

    console.log('Account address:', account.address);
    console.log('Private key:', account.privateKey);


    // connection.query(`INSERT INTO createdaccount (public, private) VALUES("${account.address}", "${account.privateKey}")`,(err, reso)=>{
    //     if(err) throw err;
    //     console.log("INSERTED")
    //     res.json({msg:account.address})

    // })
   

    fs.appendFileSync('public/createdaccounts.txt', `${account.address}\n ${account.privateKey}\n \n`, 'utf8');
    res.json({msg:account.address})

console.log("Account Created .. !")
  

        
}

module.exports = CreateAccount;