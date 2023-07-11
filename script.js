const jogar = (nomeJogador, opcaoJogador) => {
    let opcaoComputador = Math.floor(Math.random() * 3) + 1;

    definirOpcoes(`Jogador ${nomeJogador}`, opcaoJogador);
    definirOpcoes(`Computador`, opcaoComputador);

    compararOpcoes(opcaoJogador, opcaoComputador);
}

const definirOpcoes = (descricao, opcao) => {
    switch (opcao) {
        case 1:
            console.log(`${descricao} selecionou a opção Pedra!`);
            break;
        case 2:
            console.log(`${descricao} selecionou a opção Papel!`);
            break;
        case 3:
            console.log(`${descricao} selecionou a opção Tesoura`)
            break;
    }
}

const compararOpcoes = (opcaoJogador, opcaoComputador) => {
    if (opcaoJogador === opcaoComputador) {
        console.log("Empate!");
    } else if (
        (opcaoJogador === 1 && opcaoComputador === 3) || // Pedra - Tesoura
        (opcaoJogador === 2 && opcaoComputador === 1) || // Papel - Pedra
        (opcaoJogador === 3 && opcaoComputador === 2) // Tesoura - Papel 
    ) {
        console.log("Jogador venceu!");
    } else {
        console.log("Computador venceu!");
    }
}

var nomeJogador = prompt("Informe seu nome");
console.log(nomeJogador);

var opcao = prompt(`
    1 - Pedra \n
    2 - Papel \n
    3 - Tesoura
`);

opcao = parseInt(opcao);
jogar(nomeJogador, opcao);