let total = 0;
let cliente = null;

function cadastrarCliente() {
    const nome = document.getElementById("nomeCliente").value;
    const telefone = document.getElementById("telefoneCliente").value;

    if (nome === "" || telefone === "") {
        alert("Preencha nome e telefone");
        return;
    }

    cliente = { nome, telefone };

    document.getElementById("clienteAtual").textContent =
        `Cliente ativo: ${cliente.nome} - ${cliente.telefone}`;

    document.getElementById("nomeCliente").value = "";
    document.getElementById("telefoneCliente").value = "";
}

function comprar(nome, preco) {
    if (!cliente) {
        alert("Cadastre um cliente antes de comprar");
        return;
    }

    const lista = document.getElementById("listaCarrinho");
    const item = document.createElement("li");

    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);

    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}
