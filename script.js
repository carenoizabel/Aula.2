class MeuErro extends Error {
  constructor(message) {
    super(message);
    this.name = "Erro encontrado";
  }
}

class Produto {
    constructor(nome, artista, descricao, preco, imagem) {
      this.nome = nome;
      this.artista = artista;
      this.descricao = descricao;
      this.preco = preco;
      this.imagem = imagem;
    }
  
    mostrarProduto() {
      if(this.nome != "" && this.artista != "" && this.descricao != "" && this.preco != "" && this.imagem != ""){
        return `
          <h1>${this.nome}</h1>
          <div>${this.artista}</div>
          <p>${this.descricao}</p>
          <h3>${this.preco}</h3>
          <img src="${this.imagem}">
        `;
        } else{
          throw new MeuErro("Todos os espaços deve ser preenchidos!");
        }
      }
    }

    retornarAtributosProduto() {
      try{
        return this.mostrarProduto();
      } catch(error){
        console.log(error);
      }
    } 
  
  
  class ProdutoDestaque extends Produto {
    constructor(nome, artista, descricao, preco, imagemDestaque) {
      super(nome, artista, descricao, preco);
      this.imagemDestaque = imagemDestaque;
    }
  
    retornarAtributosDestaque() {
      try{
        return this.mostrarProdutoDestaque();
      } catch(error){
        console.log(error);
      }
    } 

    mostrarProdutoDestaque() {
      if(this.nome != "" && this.artista != "" && this.descricao != "" && this.preco != "" && this.imagemDestaque != ""){
      return `
        <h1>${this.nome}</h1>
        <div>${this.artista}</div>
        <p>${this.descricao}</p>
        <h3>${this.preco}</h3>
        <img id="imagem-destaque" src="${this.imagemDestaque}">
      `;
      } else{
        throw new MeuErro("Todos os espaços deve ser preenchidos!");
      }
    }
  }
  
  const produtoDestaque = new ProdutoDestaque("BEAUTIFUL ANGEL", "dada22", "Esta obra retrata uma figura angelical com traços delicados e expressão serena, envolta em cores suaves e harmoniosas. A artista criou uma atmosfera de beleza e tranquilidade, transmitindo uma sensação de paz e serenidade ao observador.", "US$ 520", "https://urbanarts.vteximg.com.br/arquivos/ids/2629379/124173.jpg?v=637184086729730000");
  
  const produtos = [
    new Produto("BLOOM 7", "", "Essa peça exala uma sensação de florescimento e renovação, com suas cores vivas e composição dinâmica.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/3523946/218075-PM-129-11.jpg?v=637185749993430000"),
    new Produto("BOSSA IN JAZZ", "", "Ela traz consigo uma sensação de sofisticação e relaxamento, com cores vibrantes.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/3408699/179470-PM-133-63.jpg?v=637185046844200000"),
    new Produto("THIS CITY REFIX", "", "Essa peça apresenta uma representação visual impactante e intrigante de uma menina jovem.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/3510346/184884-PM-129-11.jpg?v=637185127276830000"),
    new Produto("TROPICAL GIRL 23", "", "Com sua estética tropical e colorida, ele traz uma atmosfera alegre e descontraída para qualquer ambiente.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/8601757/450010_Ampliada.jpg?v=637552552358800000"),
    new Produto("REALEZA AFRICANA", "", "Sua pele é representada em tons ricos e profundos, simbolizando a diversidade e a beleza da pele negra.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/10041713/156188_Ampliada.jpg?v=637691305843500000"),
    new Produto("CENTELHA 3 DA HELO", "", "A mulher é retratada em um momento de contemplação, transmitindo uma aura de mistério e serenidade.", "US$ 199", "https://urbanarts.vteximg.com.br/arquivos/ids/8893924/865632_Ampliada.jpg?v=637562913364800000"),
  ];
  const produtoDestaqueErro = new ProdutoDestaque ("Noite Estrelada", "Van Gogh", "", "US$ 1899", "noiteestrelada.jpg")
  const produtoErro = new Produto ("Noite Estrelada", "Van Gogh", "", "US$ 1899", "noiteestrelada.jpg")
  
  const produtoDestaqueElement = document.getElementById("produto-destaque");
  produtoDestaqueElement.innerHTML = produtoDestaque.mostrarProdutoDestaque();
  const erro = produtoDestaqueErro.retornarAtributosDestaque();
  console.log(erro) 
  
  const erro = produtoDestaqueErro.retornarAtributosDestaque();
  console.log(erro) const erro = produtoDestaqueErro.retornarAtributosDestaque();
  console.log(erro) 


  const listaProdutosElement = document.getElementById("lista-produtos");
  produtos.forEach(produto => {
    const produtoElement = document.createElement("div");
    produtoElement.classList.add("produto");
    produtoElement.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <p>${produto.preco}</p>
      <p>${produto.artista}</p>
    `;
    listaProdutosElement.appendChild(produtoElement);
  });
  