class PuzzleNode {
  constructor(state, parent, action, pathCost) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.pathCost = pathCost;
  }
}

class EightPuzzleProblem {
  constructor(initialState, goalState) {
    this.initialState = initialState;
    this.goalState = goalState;
  }

  ACTIONS(state) {
    // Retorna as ações possíveis, representadas por movimentos do espaço vazio (0)
    const actions = [];
    const emptyIndex = state.indexOf(0);

    // Movimento para cima
    if (emptyIndex - 3 >= 0) {
      actions.push('UP');
    }
    // Movimento para baixo
    if (emptyIndex + 3 < state.length) {
      actions.push('DOWN');
    }
    // Movimento para a esquerda
    if (emptyIndex % 3 !== 0) {
      actions.push('LEFT');
    }
    // Movimento para a direita
    if ((emptyIndex + 1) % 3 !== 0) {
      actions.push('RIGHT');
    }

    return actions;
  }

  ACTION_COST(state, action, nextState) {
    // Suponha que todos os custos de ação sejam 1 no nosso exemplo.
    return 1;
  }

  RESULT(state, action) {
    // Retorna o próximo estado após a execução de uma ação
    const newState = state.slice();
    const emptyIndex = newState.indexOf(0);
    const targetIndex = emptyIndex + (action === 'UP' ? -3 : action === 'DOWN' ? 3 : action === 'LEFT' ? -1 : 1);

    // Troca as posições do espaço vazio e da peça adjacente
    [newState[emptyIndex], newState[targetIndex]] = [newState[targetIndex], newState[emptyIndex]];

    return newState;
  }

  IS_GOAL(state) {
    // Verifica se o estado atual é o estado objetivo
    return state.join('') === this.goalState.join('');
  }
}

// Criando um problema de quebra-cabeça inicial e objetivo
const initialPuzzle = [1, 2, 3, 4, 0, 5, 6, 7, 8];
const goalPuzzle = [1, 2, 3, 4, 5, 6, 7, 8, 0];

const puzzleProblem = new EightPuzzleProblem(initialPuzzle, goalPuzzle);

// Função heurística simples para exemplificar (número de peças fora do lugar)
function heuristicFunction(node) {
  return node.state.reduce((count, value, index) => (value !== goalPuzzle[index] ? count + 1 : count), 0);
}

// Executando o algoritmo BEST-FIRST-SEARCH
const solutionNode = BEST_FIRST_SEARCH(puzzleProblem, heuristicFunction);

// Exibindo o caminho da solução
console.log("Caminho encontrado:");
if (solutionNode) {
  let currentNode = solutionNode;
  while (currentNode) {
    console.log(currentNode.state);
    currentNode = currentNode.parent;
  }
} else {
  console.log("Não foi possível encontrar um caminho.");
}
