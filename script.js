// Model
class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

let produtos = [];

// View
function atualizarView(produto) {
    alert(`Produto cadastrado com sucesso!`);
}

function exibirProdutos() {
    const lista = document.getElementById('listaProdutos');
    lista.innerHTML = "";

    produtos.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${p.nome} | Preço: R$${p.preco} | Descrição: ${p.descricao}`;
        lista.appendChild(li);
    });
}

// Controller
document.getElementById('form-produto').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;

    const novoProduto = new Produto(nome, preco, descricao);
    produtos.push(novoProduto);

    atualizarView(novoProduto);
    exibirProdutos();

    this.reset();
});