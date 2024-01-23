
function initializePopulation(populationSize, genomeLength) {
    const population = [];
    for (let i = 0; i < populationSize; i++) {
        const individual = generateRandomIndividual(genomeLength);
        population.push(individual);
    }
    return population;
}

function generateRandomIndividual(genomeLength) {
    let individual = '';
    for (let i = 0; i < genomeLength; i++) {
        individual += Math.random() < 0.5 ? '0' : '1';
    }
    return individual;
}

function fitnessFunction(individual) {
    return individual.split('1').length - 1;
}

function weightedRandomChoice(population, weights, count) {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const selected = [];

    for (let i = 0; i < count; i++) {
        let rand = Math.random() * totalWeight;
        let j = 0;

        while (rand > weights[j]) {
            rand -= weights[j];
            j++;
        }

        selected.push(population[j]);
    }

    return selected;
}

function reproduce(parent1, parent2) {
    const n = parent1.length;
    const crossoverPoint = Math.floor(Math.random() * n);
    const child = parent1.substring(0, crossoverPoint) + parent2.substring(crossoverPoint);
    return child;
}

function mutate(individual, mutationProbability) {
    return individual.split('').map(bit => (Math.random() < mutationProbability) ? (bit === '0' ? '1' : '0') : bit).join('');
}

export default function geneticAlgorithm(populationSize, genomeLength, mutationProbability, maxGenerations) {
    let population = initializePopulation(populationSize, genomeLength);
    let generation = 0;

    while (generation < maxGenerations) {
        const weights = population.map(individual => fitnessFunction(individual));
        const parent1 = weightedRandomChoice(population, weights, 1)[0];
        const parent2 = weightedRandomChoice(population, weights, 1)[0];

        const child = reproduce(parent1, parent2);

        if (Math.random() < mutationProbability) {
            population.push(mutate(child, mutationProbability));
        } else {
            population.push(child);
        }

        generation++;
    }

    const bestIndividual = population.reduce((best, current) => {
        return fitnessFunction(current) > fitnessFunction(best) ? current : best;
    }, population[0]);

    return bestIndividual;
}
