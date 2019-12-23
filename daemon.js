//Import child process to execute OpenSSL commands
const { exec } = require('child_process');


//Setting Daemon function to receive memPool and background operations

var memPool = []
var daemon = {
    memPool: function(tx) {
        addToPool(tx)
    }
}

//Function to handle the import of the transctions to the array of MemoryPool
function addToPool(params) {
    let size = memPool.length
    if (size >= 2) {
        generateBlock()
        memPool.push(params)
    } else {
        memPool.push(params)
    }
}

//Function to form the block from memorypool
function generateBlock() {
    let addressvalidationRespose = validateAddress(memPool)
        //Clear the memPool if all the validations are correct
    memPool = []
}

//Address validation function for the transactions
function validateAddress(txs) {
    for (i = 0; i < txs.length; i++) {
        let command = 'openssl dgst -sha256 -verify ' + txs[i].address.from + ' -signature ' + txs[i].signature + ' <' + JSON.stringify(txs[i].data) + txs[i].meta.timestamp
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error('exec error: ${err}');
                return;
            }

            console.log('Verification status: ');
        });
    }
}

//Business Logic validation function for the transactions
function validateLogic() {

}

//Exporting Daemon funcitons to the main thread
module.exports = daemon