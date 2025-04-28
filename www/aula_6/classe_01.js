class Carro {
    marca;
    modelo;
    ano

    ligar() {
        console.log("o carro está ligado")
    }
}

// criando objeto (instância)
var carro1 = new carro()
carro1.marca = "Chevrolet"
carro1.modelo = "hatch"
carro1.ano = "2005"

carro1.ligar()
console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)

var carro2 = new carro()
carro2.marca =  "Chevrolet"
carro2.modelo = "opala"
carro2.ano = "1968"
 
console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)