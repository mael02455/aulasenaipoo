class Produto{
    nome;
    preco;
    quantidade;
    exibadetalhes(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        console.log("Produto: " + this.nome)
        console.log("Preço: " + this.preco)
        console.log("qunatidade: " + this.quantidade)

    }
calcularTotal(preco, quantidade){
    this.preco = preco
    this.quantidade = quantidade
    var resultado = this.preco * this.quantidade;
    console.log("o valor total é: " + resultado )}

}


var produto = new Produto()
produto.exibadetalhes("Feijão", 12, 10)

produto.calcularTotal(10, 10)
