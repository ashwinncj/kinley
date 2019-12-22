const express = require('express')
var bodyParser = require('body-parser')
const port = 3001
var app = express()
app.listen(port)
var transaction = require('./lib/transaction.js')

//Setting up body parser to understand JSON format
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    //Importing Transaction library here

app.get('/', function(req, res) {
    let response = transaction.test()
    res.send(response)
})

app.post('/tx', function(req, res) {
    let tx = req.body.tx
    if (tx == 'assetCreation') {
        response = generateAsset(req.body)

    } else {
        response = { "error": "Type of the transaction not provided in the input!" }
    }
    res.send(response)
})

function generateAsset(params) {
    return transaction.create(params)
}