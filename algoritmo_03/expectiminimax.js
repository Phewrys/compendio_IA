// Função para criar um nó na árvore
function createNode(value, children = []) {
    return {
      value,
      children,
    };
  }
  
  // Função Expectiminimax
  function expectiminimax(node, depth, maximizingPlayer) {
    if (depth === 0 || node.children.length === 0) {
      return node.value;
    }
  
    if (maximizingPlayer) {
      return maxValue(node, depth);
    } else {
      return expectiValue(node, depth);
    }
  }
  
  // Função para calcular o valor máximo
  function maxValue(node, depth) {
    let maxEval = -Infinity;
    for (let child of node.children) {
      let eval = expectiminimax(child, depth - 1, false);
      maxEval = Math.max(maxEval, eval);
    }
    return maxEval;
  }
  
  // Função para calcular o valor esperado
  function expectiValue(node, depth) {
    let expectedValue = 0;
    for (let child of node.children) {
      expectedValue += expectiminimax(child, depth - 1, true);
    }
    return expectedValue / node.children.length;
  }
  
  // Exemplo de uso
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
  
  const result = expectiminimax(tree, 3, true);
  console.log("Resultado:", result);
  