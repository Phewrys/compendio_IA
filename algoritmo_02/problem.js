import geneticAlgorithm from './genetic_algorithms.js'

function ackleyFunction(x, y) {
    const term1 = -20 * Math.exp(-0.2 * Math.sqrt(0.5 * (x**2 + y**2)));
    const term2 = -Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)));
    const result = term1 + term2 + Math.E + 20;
    return result;
}

function fitnessFunction(individual) {
    const x = individual[0];
    const y = individual[1];
    return -ackleyFunction(x, y);
}

function generateRandomIndividual(genomeLength) {
    let individual = '';
    for (let i = 0; i < genomeLength; i++) {
        individual += Math.random() < 0.5 ? '0' : '1';
    }
    return individual;
}

function initializePopulation(populationSize, genomeLength) {
    const population = [];
    for (let i = 0; i < populationSize; i++) {
        const individual = generateRandomIndividual(genomeLength);
        population.push(individual);
    }
    return population;
}

const examplePopulation = initializePopulation(50, 2);
const bestSolution = geneticAlgorithm(examplePopulation, fitnessFunction);
console.log("Melhor solução encontrada:", bestSolution);

