class Pessoa {
    nome; 
    idade;

    falar(nome, idade) {
        this.nome = nome
        this.idade = idade
        console.log("olá eu sou " + this.nome)
        console.log("minha idade é de " + this.idade)
    }
}
var pessoa = new Pessoa 
pessoa.falar(" Esmael ", 19 )

console.log(pessoa.nome)