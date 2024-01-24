export default function simulatedAnnealing(problem, schedule) {
    let current = problem.INITIAL;
    
    for (let t = 1; ; t++) {
        const T = schedule(t);
        
        if (T === 0) {
            return current;
        }

        const next = randomlySelectedSuccessor(current);
        const deltaE = VALUE(next) - VALUE(current);

        if (deltaE > 0 || Math.exp(deltaE / T) > Math.random()) {
            current = next;
        }
    }
}

function randomlySelectedSuccessor(current) {
    return current;
}

function VALUE(state) {
    return 0;
}
