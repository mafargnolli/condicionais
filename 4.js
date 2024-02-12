const ladoA = 7;
const ladoB = 7;

if (ladoA === ladoB && ladoA >= 0 && ladoA <= 6) {
    //verificando se da bucha ou nao

    switch (ladoA) {
        case 0:
            console.log("Essa bucha tipo Branco");
            break;
        case 1:
            console.log("Essa bucha eh tipo As");
            break;
        case 2:
            console.log("Essa bucha eh do tipo Duque");
            break;
        case 3:
            console.log("Essa bucha eh do tipo Terno");
            break;
        case 4:
            console.log("Essa bucha eh do tipo Quadra");
            break;
        case 5:
            console.log("Essa bucha eh do tipo Quina");
            break;
        case 6:
            console.log("Essa bucha eh do tipo Sena");
            break;        
    }
} else {
    console.log("Nao eh uma bucha");
}