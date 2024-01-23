class Node {
  constructor(state, parent, action, pathCost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.pathCost = pathCost;
    this.heuristic = heuristic;
  }
}

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

export default function A_STAR_SEARCH(problem, heuristic) {
  const initialState = new Node(problem.initialState, null, null, 0, heuristic(problem.initialState));
  const frontier = new PriorityQueue();
  const reached = { [initialState.state]: initialState };

  frontier.enqueue(initialState, initialState.pathCost + initialState.heuristic);

  while (!frontier.isEmpty()) {
    const node = frontier.dequeue();

    if (problem.IS_GOAL(node.state)) {
      return node;
    }

    for (const child of EXPAND(problem, node, heuristic)) {
      const stateKey = child.state;

      if (!(stateKey in reached) || child.pathCost < reached[stateKey].pathCost) {
        reached[stateKey] = child;
        frontier.enqueue(child, child.pathCost + child.heuristic);
      }
    }
  }

  return null;
}

function EXPAND(problem, node, heuristicFunction) {
  const actions = problem.ACTIONS(node.state);
  return actions.map((action) => {
    const nextState = problem.RESULT(node.state, action);
    const pathCost = node.pathCost + problem.ACTION_COST(node.state, action, nextState);
    const heuristic = heuristicFunction(nextState);
    return new Node(nextState, node, action, pathCost, heuristic);
  });
}