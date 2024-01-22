class Node {
  constructor(name, heuristic) {
    this.name = name;
    this.heuristic = heuristic;
    this.neighbors = [];
  }
}

class GraphProblem {
  constructor(initialState, goalState) {
    this.initialState = initialState;
    this.goalState = goalState;
  }

  ACTIONS(state) {
    return state.neighbors;
  }

  ACTION_COST(state, action, nextState) {
    // Suponha que todos os custos de ação sejam 1 no nosso exemplo.
    return 1;
  }

  RESULT(state, action) {
    return action;
  }

  IS_GOAL(state) {
    return state === this.goalState;
  }
}

// Função heurística simples para exemplificar
function heuristicFunction(node) {
  // Suponha que o nó de destino é 'G'
  const goalNode = 'G';
  return Math.abs(node.charCodeAt(0) - goalNode.charCodeAt(0));
}

// Criando um grafo de exemplo
const nodeA = new Node('A', heuristicFunction('A'));
const nodeB = new Node('B', heuristicFunction('B'));
const nodeC = new Node('C', heuristicFunction('C'));
const nodeD = new Node('D', heuristicFunction('D'));
const nodeE = new Node('E', heuristicFunction('E'));
const nodeG = new Node('G', heuristicFunction('G'));

nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeA, nodeD];
nodeC.neighbors = [nodeA, nodeE];
nodeD.neighbors = [nodeB, nodeG];
nodeE.neighbors = [nodeC, nodeG];
nodeG.neighbors = [nodeD, nodeE];

const problem = new GraphProblem(nodeA, nodeG);

function BEST_FIRST_SEARCH(problem, f) {
  const initialState = problem.initialState;
  const frontier = new PriorityQueue();
  const reached = { [initialState.name]: initialState };

  frontier.enqueue(initialState, f(initialState));

  while (!frontier.isEmpty()) {
    const node = frontier.dequeue();

    if (problem.IS_GOAL(node)) {
      return node;
    }

    for (const child of EXPAND(problem, node)) {
      const stateName = child.name;

      if (!(stateName in reached) || child.heuristic < reached[stateName].heuristic) {
        reached[stateName] = child;
        frontier.enqueue(child, f(child));
      }
    }
  }

  return null; // failure
}

// Implementando uma fila de prioridade simples
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().node;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function EXPAND(problem, node) {
  return problem.ACTIONS(node);
}

// Executando o algoritmo BEST-FIRST-SEARCH
const solutionNode = BEST_FIRST_SEARCH(problem, (node) => node.heuristic);

console.log("Caminho encontrado:");
if (solutionNode) {
  let currentNode = solutionNode;
  while (currentNode) {
    console.log(currentNode.name);
    currentNode = currentNode.parent;
  }
} else {
  console.log("Não foi possível encontrar um caminho.");
}
