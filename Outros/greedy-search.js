// Estrutura de dados para representar um grafo ponderado
function criarGrafo() {
    const grafo = {
      vertices: new Set(),
      arestas: {},
      heuristica: {},
    };
  
    function adicionarVertice(vertice, heuristica) {
      grafo.vertices.add(vertice);
      grafo.arestas[vertice] = [];
      grafo.heuristica[vertice] = heuristica;
    }
  
    function adicionarAresta(origem, destino, custo) {
      grafo.arestas[origem].push({ destino, custo });
      grafo.arestas[destino].push({ destino: origem, custo }); // Aresta não direcional
    }
  
    return { adicionarVertice, adicionarAresta, grafo };
  }
  
  // Função de busca gulosa (greedy search) com heurística
  function greedySearch(grafo, inicio, objetivo) {
    let atual = inicio;
    const visitados = new Set([atual]);
    const caminho = [atual];
  
    while (atual !== objetivo) {
      const vizinhos = grafo.arestas[atual].filter(v => !visitados.has(v.destino));
  
      if (vizinhos.length === 0) {
        console.log("Não foi possível atingir o objetivo.");
        return;
      }
  
      // Escolhe o vizinho com menor heurística
      const proximo = vizinhos.reduce((min, v) => {
        const heuristicaAtual = grafo.heuristica[atual];
        const heuristicaVizinho = grafo.heuristica[v.destino];
        return heuristicaVizinho < heuristicaAtual ? v : min;
      }, vizinhos[0]);
  
      visitados.add(proximo.destino);
      caminho.push(proximo.destino);
      atual = proximo.destino;
    }
  
    console.log("Caminho encontrado:", caminho.join(" -> "));
  }
  
  // Exemplo de uso
  const { adicionarVertice, adicionarAresta, grafo } = criarGrafo();
  
  adicionarVertice("A", 5);
  adicionarVertice("B", 3);
  adicionarVertice("C", 2);
  adicionarVertice("D", 0);
  
  adicionarAresta("A", "B", 2);
  adicionarAresta("A", "C", 5);
  adicionarAresta("B", "D", 1);
  adicionarAresta("C", "D", 3);
  
  /*
      A(5)
     / \
  2 /   \ 5
  B(3)   C(2)
    \   /
   1 \ / 
      D(0)
  */
  
  console.log("Resultado da Greedy Search:");
  greedySearch(grafo, "A", "D");

/* RESULTADO GERADO

Resultado da Greedy Search:
Caminho encontrado: A -> C -> D
*/