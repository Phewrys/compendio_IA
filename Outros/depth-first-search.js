
// Função para criar um nó da árvore
function criarNodo(valor) {
    return {
      valor: valor,
      filhos: []
    };
  }
  
  // Função para adicionar um filho a um nó
  function adicionarFilho(nodo, filho) {
    nodo.filhos.push(filho);
  }
  
  // Função que implementa o Depth First Search (DFS) em uma árvore
  function dfsArvore(nodo, visitados = new Set()) {
    console.log("Visitando:", nodo.valor);
    visitados.add(nodo);
  
    for (const filho of nodo.filhos) {
      if (!visitados.has(filho)) {
        dfsArvore(filho, visitados);
      }
    }
  }
  
  // Exemplo de uso
  const raiz = criarNodo("A");
  const filhoB = criarNodo("B");
  const filhoC = criarNodo("C");
  const netoD = criarNodo("D");
  const netoE = criarNodo("E");
  const netoF = criarNodo("F");
  
  adicionarFilho(raiz, filhoB);
  adicionarFilho(raiz, filhoC);
  
  adicionarFilho(filhoB, netoD);
  adicionarFilho(filhoB, netoE);
  
  adicionarFilho(filhoC, netoF);
  
  /* ÁRVORE CRIADA
         A
        / \
       B   C
      / \   \
     D   E   F
  */
  
  console.log("Resultado da DFS na árvore:");
  dfsArvore(raiz);

/* RESULTADO GERADO

Resultado da DFS na árvore:
Visitando: A
Visitando: B
Visitando: D
Visitando: E
Visitando: C
Visitando: F
*/