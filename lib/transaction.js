const md5 = require('md5')
const daemon = require('../daemon')
    //Define each transaction of the assets within the transaction variable
var transaction = {
    create: function(params) {
        let asset = {
            uid: params.data.uid,
            description: params.data.description
        }
        let address = {
            from: params.address.from,
            to: params.address.to
        }
        let processedTx = {
            address: address,
            data: asset,
            meta: meta(asset)
        }
        daemon.memPool(processedTx)
        return processedTx
    }
}

//Meta-data generic function for all the transaction.
function meta(param) {
    let tempData = JSON.stringify(param)
    let timestamp = Date.now()
    let meta = {
        timestamp: timestamp,
        hash: md5(tempData + timestamp)
    }
    return meta
}

//Exporting the transaction module to the main thread
module.exports = transaction