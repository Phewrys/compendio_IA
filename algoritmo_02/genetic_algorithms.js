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

export default function geneticAlgorithm(population, fitness) {
    const mutationProbability = 0.01;
    const maxGenerations = 100;
    
    let generation = 0;

    while (generation < maxGenerations) {
        const weights = population.map(individual => fitness(individual));
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
        return fitness(current) > fitness(best) ? current : best;
    }, population[0]);

    return bestIndividual;
}
