//Criterios montanha russa, NAO permite:
//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura

//Para quem atender os criterios, tabela de preço:
//10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
//20 reais, caso contrário

//devo imprimir na tela:
//ACESSO NEGADO caso a pessoa não possa brincar
//10 reais caso esse seja o valor que a pessoa deve pagar para brincar
//20 reais caso esse seja o valor que a pessoa deve pagar para brincar

const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade > 12 && idade <= 65 && possuiPatologia === false && altura > 150) {
    console.log("PERMITIDO");
} else {
    console.log("NAO PERMITIDO");

}if (idade > 12 && idade < 18 && possuiPatologia === false && altura > 150) {
    console.log("Paga 10 reais");
} else {
    console.log("Paga 20 reais");
}
