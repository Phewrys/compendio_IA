// Função para criar um nó na árvore
function createNode(value, children = []) {
    return {
      value,
      children,
    };
  }
  
  // Função Expectiminimax com poda alfa-beta
  function expectiminimaxAlphaBeta(node, depth, alpha, beta, maximizingPlayer) {
    if (depth === 0 || node.children.length === 0) {
      return node.value;
    }
  
    if (!maximizingPlayer) {
      return expectiValue(node, depth, alpha, beta);
    } else {
      return maxValue(node, depth, alpha, beta);
    }
  }
  
  // Função para calcular o valor máximo
  function maxValue(node, depth, alpha, beta) {
    let maxEval = -Infinity;
    for (let child of node.children) {
      let eval = expectiminimaxAlphaBeta(child, depth - 1, alpha, beta, false);
      maxEval = Math.max(maxEval, eval);
      alpha = Math.max(alpha, eval);
      if (beta <= alpha) {
        break; // Poda alfa-beta
      }
    }
    return maxEval;
  }
  
  // Função para calcular o valor esperado (para jogadores de chance)
  function expectiValue(node, depth, alpha, beta) {
    let expectedValue = 0;
    for (let child of node.children) {
      expectedValue += expectiminimaxAlphaBeta(child, depth - 1, alpha, beta, true);
    }
    return expectedValue / node.children.length;
  }
  
  // Exemplo de uso com valores apenas nos nós folha
  const tree = createNode(null, [
    createNode(null, [
      createNode(5),
      createNode(9),
    ]),
    createNode(null, [
      createNode(8),
      createNode(10),
    ]),
  ]);
  
  const result = expectiminimaxAlphaBeta(tree, 3, -Infinity, Infinity, true);
  console.log("Resultado:", result);