const { AptosClient } = require("aptos")
const { APTOS_NODE_URL } = require("../config/aptosConfig")

const client = new AptosClient(APTOS_NODE_URL)

async function getAccountInfo(address){

try{

const account = await client.getAccount(address)

return account

}catch(e){

console.log("Error fetching account", e)

}

}

module.exports = {
getAccountInfo
}
