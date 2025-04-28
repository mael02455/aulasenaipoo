class Livro {
    titulo;
    autor;
    exibirinfo
    info(titulo,autor ){
        this.titulo = titulo
        this.autor = autor
        console.log(this.titulo)
        console.log(this.autor)

    }

}
var livro1 = new Livro()
livro1.info("como era antes de você", "Jojo Moyes")

var livro2 = new Livro() 
livro2.info("chapeuzinho ", "Lisbeth Zwerger")

var livro3 = new Livro() 
livro3.info("clube da luta ", "Chuck Palahniuk")