export class Produto{
    id;
    nome;
    preco;
    quantidade;

    // Métodos (Comportamentos da regra de negócio)
    calcularValorTotalEmEstoque() {
        // O "this." é obrigatório no JavaScript para acessar os atributos da própria classe
        return this.preco * this.quantidade;
    }

    exibirRelatorio() {
        console.log(`\n--- RELATÓRIO DO PRODUTO ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade} unidades`);
        console.log(`Total em Estoque: R$ ${this.calcularValorTotalEmEstoque()}`);
        console.log(`----------------------------\n`);
    }
}