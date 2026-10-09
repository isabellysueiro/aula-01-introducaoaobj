import readline from 'readline-sync';
import { Produto } from "./src/models/produto.js";

console.log("=== SISTEMA DE ESTOQUE ===\n");

// 1. Instanciando o objeto na memória RAM
const meuProduto = new Produto();

// 2. Coletando dados do usuário via terminal
meuProduto.id = readline.questionInt("Digite o ID do produto: ");
meuProduto.nome = readline.question("Digite o nome do produto: ");
meuProduto.preco = readline.questionFloat("Digite o preco (Ex: 150.50): ");
meuProduto.quantidade = readline.questionInt("Digite a quantidade em estoque: ");

// 3. Processamento e Saída utilizando os métodos da Classe
console.log("\nProcessando regras de negócio...");
meuProduto.exibirRelatorio();