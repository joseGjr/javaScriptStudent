class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = ["magia", "espada", "artes marciais", "shuriken"];
        switch (this.tipo) {
            case "mago":
                return `O tipo ${this.tipo} atacou usando ${ataques[0]}`;
            case "guerreiro":
                return `O tipo ${this.tipo} atacou usando ${ataques[1]}`;
            case "monge":
                return `O tipo ${this.tipo} atacou usando ${ataques[2]}`;
            case "ninja":
                return `O tipo ${this.tipo} atacou usando ${ataques[3]}`;
            default:
                return "ERROR!! Tipo de herói inválido!!";
        }
    }
}

document.getElementById("heroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipo = document.getElementById("tipo").value;

    const novoHeroi = new Heroi(nome, idade, tipo);
    const resultado = novoHeroi.atacar();

    document.getElementById("resultado").textContent = resultado;

    
});

