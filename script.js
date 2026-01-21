let total = 0;

function comprar(nome, preco) {
    const lista = document.getElementById("listaCarrinho");
    const item = document.createElement("li");

    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    lista.appendChild(item);

    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}
