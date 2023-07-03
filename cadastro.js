class Produto{
    constructor(Nome, Quantidade, Preço){
        this.Nome = Nome;
        this.Quantidade = Quantidade;
        this.Preço = Preço;
    }
};

const sabonete = new Produto("sabonete",5,10);

console.log(sabonete.Preço);