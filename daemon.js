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
    if (size >= 9) {
        generateBlock()
    } else {
        memPool.push(params)
    }
}

//Function to form the block from memorypool
function generateBlock() {
    let addressvalidationRespose = validateAddress(memPool)
}

//Address validation function for the transactions
function validateAddress() {

}

//Business Logic validation function for the transactions
function validateLogic() {

}

//Exporting Daemon funcitons to the main thread
module.exports = daemon