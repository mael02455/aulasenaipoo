class aluno{
    nome;
    idade;
    curso
    exibirinfo(nome, idade, curso){
        this.nome = nome
        this.idade = idade
        this.curso = curso

        console.log(" aluno " + this.nome)
        console.log(" idade " + this.idade)
        console.log(" curso " + this.curso)

    }
}

var aluno1 = new aluno()
var aluno2 = new aluno()
var aluno3 = new aluno()

aluno1.exibirinfo("Esmael", 19, "sistema de informatica")
aluno2.exibirinfo("bruno", 45, " informatica basica")
aluno3.exibirinfo("joe", 19, "Robotica")