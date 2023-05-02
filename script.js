// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, datadeCadastro, descricao, preco){
        this.nome = nome;
        this.datadeCadastro = datadeCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProduto(){
        return this.nome + ' ' + this.datadeCadastro + ' ' + this.descricao + ' ' + this.preco
    }
}

const produto = new Produto("IFCorporation LTDA", "2023-04-19", "IFMS - Campus Naviraí", "999.99")
console.log(produto.mostrarProduto())

class ProdutoDestaque extends Produto{
    constructor(nome, datadeCadastro, descricao, preco, imgDestaque){
        super(nome, datadeCadastro, descricao, preco);
        this.imgDestaque = imgDestaque;
    }
    mostrarProdutoDestaque(){
        return  this.nome + ' ' + this.datadeCadastro + ' ' + this.descricao + ' ' + this.preco + ' ' + this.imgDestaque
    }
}

const produtoDestaque = new ProdutoDestaque("IFCorporation", "2023-04-19", "IFMS - Campus Nova Andradina", "999.99", "logo_ifms.png");
console.log(produtoDestaque.mostrarProdutoDestaque())