// ==========================Express Basic=================================
const express = require('express');
const router = express.Router();



// ========================Users Controllers==============================
const CreateAccount = require('./Controllers/CreateAccount');
const GetTokenAmount = require('./Controllers/GetTokenAmount');
const GetTotalAmount = require('./Controllers/GetTotalAmount');
const TransactionHistory = require('./Controllers/TransactionHistory');
const KeyGetter = require('./Controllers/KeyGetter')





// ============================Middlewares=================================
// const Authjwt = require('../Middlewares/Authjwt');


//============================= Routes=====================================


router.get('/createaccount',CreateAccount);
router.post('/gettotalamount', GetTotalAmount);
router.post('/getpublickey', KeyGetter);



module.exports = router;