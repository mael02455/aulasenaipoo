class calculadora {
    valor1;
    valor2;
    somar(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 + this.valor2;
        console.log("Resultado da soma: " + resultado)
    }
    divisao(valor01, valor02){
        this.valor01 = valor01;
        this.valor02 = valor02;
        var resultadodadivisao = this.valor01 / this.valor02;
        console.log("o valor da divisão é: " + resultadodadivisao )}

    multiplicaçao(valor001, valor002){
            this.valor001 = valor001;
            this.valor002 = valor002;
            var resultadodadivisao = this.valor001 * this.valor002;
            console.log("o valor da multiplicação é: " + resultadodadivisao )}
    
        

    
    
}
//Criando objeto
var calc = new calculadora();
//chamando o metodo de soma
calc.somar(10, 15); //resultado da soma 
calc.divisao(10, 2); //resultado da divsão 
calc.multiplicaçao(12, 22); //resultado da divsão 

