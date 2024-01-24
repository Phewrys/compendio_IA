// Função para criar um nó na árvore
function createNode(value, children = []) {
    return {
      value,
      children,
    };
  }
  
  // Função Minimax com poda alfa-beta
  function minimaxAlphaBeta(node, depth, alpha, beta, maximizingPlayer) {
    if (depth === 0 || node.children.length === 0) {
      return node.value;
    }
  
    if (maximizingPlayer) {
      return maxValue(node, depth, alpha, beta);
    } else {
      return minValue(node, depth, alpha, beta);
    }
  }
  
  // Função para calcular o valor máximo
  function maxValue(node, depth, alpha, beta) {
    let maxEval = -Infinity;
    for (let child of node.children) {
      let eval = minimaxAlphaBeta(child, depth - 1, alpha, beta, false);
      maxEval = Math.max(maxEval, eval);
      alpha = Math.max(alpha, eval);
      if (beta <= alpha) {
        break; // Poda alfa-beta
      }
    }
    return maxEval;
  }
  
  // Função para calcular o valor mínimo
  function minValue(node, depth, alpha, beta) {
    let minEval = Infinity;
    for (let child of node.children) {
      let eval = minimaxAlphaBeta(child, depth - 1, alpha, beta, true);
      minEval = Math.min(minEval, eval);
      beta = Math.min(beta, eval);
      if (beta <= alpha) {
        break; // Poda alfa-beta
      }
    }
    return minEval;
  }
  
// Exemplo de uso
const tree = createNode(null, [
    createNode(null, [
      createNode(5),
      createNode(8),
    ]),
    createNode(null, [
      createNode(4),
      createNode(9),
    ]),
  ]);
  
  const result = minimaxAlphaBeta(tree, 3, -Infinity, Infinity, true);
  console.log("Resultado:", result);
  