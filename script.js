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
        return  `
        <h1>${this.nome}</h1>
        <div>${this.datadeCadastro}</div>
        <p>${this.descricao}</p>
        <h3>${this.preco}</h3>
        <img id="imagem-destaque" src="${this.imgDestaque}">
        `
    }
}

const produtoDestaque = new ProdutoDestaque("IFCorporation", "2023-04-19", "IFMS - Campus Nova Andradina", "999.99", "logo_ifms.png");
console.log(produtoDestaque.mostrarProdutoDestaque())

const produtosDestaque = document.getElementById("produto-destaque");
produtosDestaque.insertAdjacentHTML('afterbegin',   produtoDestaque.mostrarProdutoDestaque());

const imagemDestaqueElement = document.getElementById("imagem-destaque");
imagemDestaqueElement.style.maxWidth = "100%";
imagemDestaqueElement.style.height = "auto";