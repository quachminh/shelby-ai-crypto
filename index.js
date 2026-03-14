function analyzeProject(project){

console.log("Analyzing project:", project)

const result = {
project: project,
sentiment: "positive",
risk: "medium",
summary: "Project shows strong community growth."
}

return result
}

const research = analyzeProject("Aptos")

console.log(research)
