//descontos da loja:
//credito 	5%
//cheque 	3%
//debito ou dinheiro 	10%

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito"){
    console.log(13000 - (valorDoProduto * 0.05));
}