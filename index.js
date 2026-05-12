const carrinho = [
  { nome: "Notebook", preco: 3000, quantidade: 1 },
  { nome: "Mouse", preco: 100, quantidade: 2 },
  { nome: "Teclado", preco: 200, quantidade: 1 }
]

function calcularTotal(carrinho) {
  let total = 0

  for (let i = 0; i <= carrinho.length; i++) {
    total += carrinho[i].preco * carrinho[i].quantidade
  }

  if (total > 1000) {
    total * 0.9
  }

  console.log("Total com desconto: " + total.toFixed(2))

  return total
}

calcularTotal()