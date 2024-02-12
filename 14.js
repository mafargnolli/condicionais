//Quantidade (litros) 	Risco 	Mensagem
//Menos de 1.5 	ALTO 	Risco Alto - Você está ingerindo pouquissima água, beba mais água!
//De 1.5 a 3 	MODERADO 	Risco Moderado - Você está ingerindo pouca água, beba mais!
//Mais de 3 	BAIXO 	Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!

//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;
if (quantidadeDeAguaIngerida < 1.5){
    console.log("Risco Alto");
}else if(quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3){
    console.log("Risco Moderado");
}else if(quantidadeDeAguaIngerida > 3){
    console.log("Risco Baixo");
}