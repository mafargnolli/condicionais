//Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, 
//faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.

//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
//const faltaPagar = valorDoProduto - valorPago;
//console.log(faltaPagar);

//parcelas faltantes

//const faltaParcelas = (faltaPagar / 10) * 0.1;
//console.log(faltaParcelas);

valorParcelas = (valorDoProduto / 100) / 10;
console.log(valorParcelas);

valorFaltante = (valorDoProduto / 100) - valorPago;
console.log(valorFaltante);

parcelasFaltantes = valorFaltante / valorParcelas;
console.log(`Faltam ${parcelasFaltantes} parcelas no valor de R$ ${valorParcelas}!`);








