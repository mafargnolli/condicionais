//a) Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, só será possível acompanhado de um responsável.

//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno >= 18){;
    console.log("Pode efetuar a rematricula");
} else if(possuiResponsavel != false){
    console.log("Possui responsavel, pode rematricular!");
}else {
    console.log("Nao pode se rematricular");
}