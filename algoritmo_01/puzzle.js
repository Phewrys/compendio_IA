import A_STAR_SEARCH from './astar.js'

class EightPuzzleProblem {
  constructor(initialState, goalState) {
    this.initialState = initialState;
    this.goalState = goalState;
  }

  ACTIONS(state) {
    const actions = [];
    const emptyIndex = state.indexOf(0);

    if (emptyIndex - 3 >= 0) {
      actions.push('UP');
    }
    if (emptyIndex + 3 < state.length) {
      actions.push('DOWN');
    }
    if (emptyIndex % 3 !== 0) {
      actions.push('LEFT');
    }
    if ((emptyIndex + 1) % 3 !== 0) {
      actions.push('RIGHT');
    }

    return actions;
  }

  ACTION_COST(state, action, nextState) {
    return 1;
  }

  RESULT(state, action) {
    const newState = state.slice();
    const emptyIndex = newState.indexOf(0);
    const targetIndex = emptyIndex + (action === 'UP' ? -3 : action === 'DOWN' ? 3 : action === 'LEFT' ? -1 : 1);

    [newState[emptyIndex], newState[targetIndex]] = [newState[targetIndex], newState[emptyIndex]];

    return newState;
  }

  IS_GOAL(state) {
    return state.join('') === this.goalState.join('');
  }
}

const initialPuzzleState = [1, 2, 3, 4, 0, 5, 6, 7, 8];
const goalPuzzleState = [1, 2, 3, 4, 5, 6, 7, 8, 0];

const eightPuzzleProblem = new EightPuzzleProblem(initialPuzzleState, goalPuzzleState);

function heuristic(state) {
  return state.reduce((count, value, index) => (value !== goalPuzzleState[index] ? count + 1 : count), 0);
}

const solutionNodeAStar = A_STAR_SEARCH(eightPuzzleProblem, heuristic);

console.log("Caminho encontrado:");
if (solutionNodeAStar) {
  let currentNode = solutionNodeAStar;
  while (currentNode) {
    console.log(currentNode.state);
    currentNode = currentNode.parent;
  }
} else {
  console.log("Não foi possível encontrar um caminho!");
}
