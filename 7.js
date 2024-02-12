//Pessoas isentas do Imposto de renda:
//Pessoas portadores de alguma doença grave
//Pessoas que já estão aposentadas
//Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Na condição em que o total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if(aposentada === false && portadoraDeDoenca === false && totalDeRendimentos <= 2855970) {
    console.log("ISENTA");
} else if(aposentada != false || portadoraDeDoenca != false || totalDeRendimentos >= 2855970) {
    console.log("PEGA LEAO");
} else if(aposentada != false && portadoraDeDoenca != false && totalDeRendimentos <= 2855970){
    console.log("VAZA LEAO");
}
