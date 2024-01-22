// Função para criar um agente reflexo simples
function criarAgenteReflexoSimples() {
    return {
      localizacao: "A",
      percepcao: null,
  
      perceber: function (ambiente) {
        this.percepcao = ambiente[this.localizacao];
        console.log(`Percebido em ${this.localizacao}: ${this.percepcao}`);
      },
  
      agir: function () {
        if (this.percepcao === "suja") {
          this.limpar();
        } else {
          this.mover();
        }
      },
  
      limpar: function () {
        console.log("Limpando a localização atual.");
        ambiente[this.localizacao] = "limpa";
      },
  
      mover: function () {
        console.log("Movendo para a outra localização.");
        this.localizacao = (this.localizacao === "A") ? "B" : "A";
      }
    };
  }
  
  // Exemplo de ambiente (locações A e B podem estar limpas ou sujas)
  const ambiente = {
    A: "suja",
    B: "limpa"
  };
  
  // Criar uma instância do AgenteReflexoSimples usando a função
  const agente = criarAgenteReflexoSimples();
  
  // Executar o agente no ambiente usando funções
  function executarAgente() {
    agente.perceber(ambiente);
    agente.agir();
    console.log("Localização atual do agente:", agente.localizacao);
  }
  
  // Executar o agente para demonstração
  executarAgente();

/* RESULTADO GERADO

Percebido em A: suja
Limpando a localização atual.
Localização atual do agente: A
*/