const express = require('express')
const app = express()
const UserRoute = require('./UserRoute');
// const connection = require('./Connection');
const bodyParser = require('body-parser');
const path = require('path')
var cors = require('cors')
const cookieParser = require('cookie-parser')
// const Authjwt = require('./Middlewares/Authjwt')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors())

app.use(cookieParser());
app.use('/static',express.static(__dirname + '/public'))

const port = 8800

 
app.use('/',UserRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
