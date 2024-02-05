//Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 == jogada2) {
    // se o jogador 1 fizer pedra, executara:
    console.log("Empate!");
} else if("pedra" != jogada1) {
        console.log(`A ${jogada1} nao eh vencedora.`);
} else if("pedra" == jogada1) {
    console.log(`${jogada1}`);

}
    



