// Função de Ackley
function ackleyFunction(x, y) {
    const term1 = -20 * Math.exp(-0.2 * Math.sqrt(0.5 * (x**2 + y**2)));
    const term2 = -Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)));
    const result = term1 + term2 + Math.E + 20;
    return result;
}

// Função de avaliação (função de custo) para o Simulated Annealing
function costFunction(state) {
    const x = state[0];
    const y = state[1];
    return -ackleyFunction(x, y); // Negativo porque estamos minimizando
}

// Simulated Annealing
function simulatedAnnealing(problem, schedule) {
    let current = problem.INITIAL;

    for (let t = 1; ; t++) {
        const T = schedule(t);

        if (T === 0) {
            return current;
        }

        const next = randomlySelectedSuccessor(current);
        const deltaE = costFunction(next) - costFunction(current);

        if (deltaE > 0 || Math.exp(deltaE / T) > Math.random()) {
            current = next;
        }
    }
}

// Função para gerar um sucessor aleatório
function randomlySelectedSuccessor(current) {
    // Gere um sucessor modificando ligeiramente o estado atual
    const newX = current[0] + (Math.random() * 2 - 1); // Modificação aleatória em x
    const newY = current[1] + (Math.random() * 2 - 1); // Modificação aleatória em y
    return [newX, newY];
}

// Função de agendamento exponencial para o Simulated Annealing
function exponentialSchedule(t) {
    const initialTemperature = 1000.0;
    const coolingRate = 0.01;
    return initialTemperature * Math.exp(-coolingRate * t);
}

// Exemplo de uso
const problem = {
    INITIAL: [0, 0], // Estado inicial
    // Outras propriedades específicas do seu problema, se houver
};

const solution = simulatedAnnealing(problem, exponentialSchedule);
console.log("Solução encontrada:", solution);
