const carrinho = [20.25, 10.58, 30.10, 20.50, 40.80, 30.90, 10.15, 10.75, 40.20, 30.18, 20.80]

function calcularTotalCarrinho(carrinho) {
    let total = 0;
    for (let index = 0; index < carrinho.length; index++) {
        const preco = carrinho[index];
        total += preco;
    }

    return parseFloat(total).toFixed(2);
}

function valoresEnganosos(carrinho) {
    let valoresFalsos = [];
    for (let index = 0; index < carrinho.length; index++) {
        const valorEnganoso = (carrinho[index] / totalCarrinho);
        valoresFalsos.push((carrinho[index] + (25 * valorEnganoso).toFixed(2)));
    }

    return parseFloat(valoresFalsos).toFixed(2);
}

function calcularDesconto(valorTotal, desconto) {
    return parseFloat(valorTotal - desconto).toFixed(2);
}

const desconto = 50;
const totalCarrinho = calcularTotalCarrinho(carrinho);
const listaValoresEnganosos = valoresEnganosos(carrinho);
const totalCarrinhoEnganoso = calcularTotalCarrinho(listaValoresEnganosos);
const valorRealComDesconto = calcularDesconto(totalCarrinho, desconto);
const valorEnganosoComDesconto = calcularDesconto(totalCarrinhoEnganoso, desconto);

console.log(`O array com os novos valores dos produtos:`, listaValoresEnganosos);
console.log(`O valor total enganoso da compra: ${totalCarrinhoEnganoso}`);
console.log(`O valor do desconto: ${desconto}`);
console.log(`O valor final enganoso da compra: ${valorRealComDesconto}`);
console.log(`O valor total real da compra: ${totalCarrinho}`);
console.log(`O valor final com desconto real da compra: ${valorRealComDesconto}`);