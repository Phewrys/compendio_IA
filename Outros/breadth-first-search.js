
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
  
  // Função que implementa o Breadth-First Search (BFS) em uma árvore
  function bfsArvore(raiz) {
    const fila = [raiz]; // Fila para armazenar os nós a serem visitados
  
    while (fila.length > 0) {
      const nodoAtual = fila.shift(); // Remover o nó da frente da fila
  
      console.log("Visitando:", nodoAtual.valor);
  
      // Adicionar os filhos à fila se existirem
      for (const filho of nodoAtual.filhos) {
        fila.push(filho);
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
  
  console.log("Resultado da BFS na árvore:");
  bfsArvore(raiz);

/* RESULTADO GERADO

Resultado da BFS na árvore:
Visitando: A
Visitando: B
Visitando: C
Visitando: D
Visitando: E
Visitando: F
*/
  