const { getAccountInfo } = require("./services/aptosData")
const generateResearch = require("./services/aiResearch")

async function run(){

const project = "Aptos"

const research = generateResearch(project)

console.log("AI Research Result")

console.log(research)

}

run()
