
// Função para criar um nó da árvore ponderada
function criarNodo(valor, custo) {
    return {
      valor: valor,
      custo: custo,
      filhos: []
    };
  }
  
  // Função para adicionar um filho a um nó
  function adicionarFilho(nodoPai, nodoFilho, custo) {
    nodoPai.filhos.push({ nodo: nodoFilho, custo });
  }
  
  // Função para realizar a busca de custo uniforme
  function uniformCostSearchArvore(raiz, objetivo) {
    const fila = [{ nodo: raiz, custoAcumulado: 0 }];
    const visitados = new Set();
  
    while (fila.length > 0) {
      fila.sort((a, b) => a.custoAcumulado - b.custoAcumulado);
      const { nodo, custoAcumulado } = fila.shift();
  
      if (nodo.valor === objetivo) {
        console.log("Caminho encontrado:", objetivo);
        break;
      }
  
      if (!visitados.has(nodo)) {
        console.log("Visitando:", nodo.valor);
  
        visitados.add(nodo);
  
        for (const filho of nodo.filhos) {
          const novoCustoAcumulado = custoAcumulado + filho.custo;
          fila.push({ nodo: filho.nodo, custoAcumulado: novoCustoAcumulado });
        }
      }
    }
  }
  
  // Exemplo de uso
  const raiz = criarNodo("A", 0);
  const filhoB = criarNodo("B", 1);
  const filhoC = criarNodo("C", 3);
  const netoD = criarNodo("D", 2);
  const netoE = criarNodo("E", 1);
  
  adicionarFilho(raiz, filhoB, 1);
  adicionarFilho(raiz, filhoC, 3);
  adicionarFilho(filhoB, netoD, 2);
  adicionarFilho(filhoB, netoE, 1);
  
  /*
         A (0)
        / \
    B (1)   C (3)
      / \
  D (2)  E (1)
  */
  
  console.log("Resultado do Uniform Cost Search na árvore:");
  uniformCostSearchArvore(raiz, "D");

/* RESULTADO GERADO

Visitando: A
Visitando: B
Visitando: E
Visitando: C
Caminho encontrado: D
*/