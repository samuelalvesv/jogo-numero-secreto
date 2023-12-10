let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);

        document.getElementById("reiniciar").removeAttribute("disabled");

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "o número secreto é menor");
        tentativas++
        limparCampo();
    } else {
        exibirTextoNaTela("p", "o número secreto é maior");
        tentativas++
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

