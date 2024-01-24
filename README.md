
<h1 align="center"><strong>Compêndio</strong></h1>

* TIAGO ALVES DE FARIAS
* GUILHERME DE JESUS SANTOS
* RODRIGO SANTANA CAMARGO


<br/>
<h2>Tópicos</h2>
<ul>
    <li><a href="#ai">Algoritmos Implementados</a></li>
    <li><a href="#a1">Algoritmo 1: Astar</a></li>
    <li><a href="#a2">Algoritmo 2: Genetic Algorithms e Simulated Annealing</a></li>
    <li><a href="#a3">Algoritmo 3: Minimax (versão alfa-beta), Expectiminimax e Monte Carlo Tree Search (MCTS)</a></li>
    <li><a href="#a4">Algoritmo 4: Q-Learning</a></li>
    <li><a href="#o">Outros</a></li>
</ul>


<br/>
<h2 id="ai">Algoritmos Implementados</h2>

- [ ] Astar
- [ ] Genetic Algorithms
- [ ] Simulated Annealing
- [x] Minimax (versão alfa-beta)
- [x] Expectiminimax
- [ ] Monte Carlo Tree Search (MCTS)
- [ ] Q-Learning
- [x] Breadth First Search - BFS (Busca em largura)
- [x] Depth First Search - DFS (Busca em profundidade)
- [x] Uniform Cost Search - UCS (Busca de custo uniforme)
- [x] Greedy Search (Busca gulosa)
- [x] Simple Reflex Agent (Agente reflexo simples)


<br/>
<h2 id="a1">Algoritmo 1: Astar</h2>

Descreva como o algoritmo funciona.


<br/>
<h2 id="a2">Algoritmo 2: Genetic Algorithms e Simulated Annealing</h2>

<h3>Genetic Algorithms</h3>

Descreva como o algoritmo funciona.


<h3>Simulated Annealing</h3>

Descreva como o algoritmo funciona.


<br/>
<h2 id="a3">Algoritmo 3: Minimax (versão alfa-beta), Expectiminimax e Monte Carlo Tree Search (MCTS)</h2>

<h3>Minimax (versão alfa-beta)</h3>

Se já estiver familiarizado com o algoritmo minimax, a versão alfa-beta introduz uma modificação crucial. Antes de examinar o nó filho à direita, é necessário verificar a existência de um nó superior maior/menor que o nó atual. Caso tal nó superior exista, ocorre a poda do nó filho à direita, evitando, assim, a necessidade de avaliá-lo.

Por exemplo, ao analisar um nó no nível MIN, é preciso verificar se há algum nó MAX superior que seja maior que o nó em análise. Da mesma forma, ao analisar um nó no nível MAX, é necessário verificar se existe algum nó MIN superior que seja menor que o nó sendo examinado.

![Exemplo de GIF](./algoritmo_03//minimax-alfa-beta.PNG)


<h3>Expectiminimax</h3>

O expectiminimax é bastante semelhante ao minimax, distinguindo-se no fato de que o primeiro nível analisado é denominado "CHANGE". Nesse nível, o valor é determinado pela média ponderada de seus filhos. Todas as outras comparações seguem a mesma lógica operacional do minimax.

![Exemplo de GIF](./algoritmo_03//expectiminimax.PNG)


<h3>Monte Carlo Tree Search</h3>

Descreva como o algoritmo funciona.


<br/>
<h2 id="a4">Algoritmo 4: Q-Learning</h2>

Descreva como o algoritmo funciona.


<br/>
<h2 id="o">Outros</h2>

<h3>Breadth First Search - BFS (Busca em largura)</h3>

A BFS é uma estratégia simples em que o nó raiz é expandido primeiro, em seguida todos os sucessores do nó raiz são expandidos, depois os sucessores desses nós, e assim por diante. Em geral, todos os nós em dada profundidade na árvore de busca são expandidos, antes que todos os nós no nível seguinte sejam expandidos.

![Exemplo de GIF](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)


<h3>Depth First Search - DFS (Busca em profundidade)</h3>

A DFS é um algoritmo que explora o máximo possível ao longo de cada ramificação antes de retroceder.

![Exemplo de GIF](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)


<h3>Uniform Cost Search - UCS (Busca de custo uniforme)</h3>

É um algoritmo de busca de caminho que explora o caminho com o menor custo.


<h3>Greedy Search (Busca gulosa)</h3>

Expande o nó que representar o estado mais próximo do objetivo.


<h3>Simple Reflex Agent (Agente reflexo simples)</h3>

O agente reflexo simples é um tipo de agente de inteligência artificial que toma decisões com base apenas nas percepções imediatas do ambiente, sem considerar o histórico ou o futuro. Neste exemplo, o agente toma decisões com base em regras fixas para algumas percepções. O ambiente é composto por duas localizações, A e B, e cada localização pode estar "limpa" ou "suja". O agente tem uma localização inicial em "A" e toma decisões com base na percepção atual, decidindo limpar a localização se ela estiver suja ou mover-se para a outra localização se estiver limpa.
