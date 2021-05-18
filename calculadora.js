let personagemSelecionado; 
let armaSelecionada; 
let poderAtaque;
let poderDefesa;

function iniciar() { 
    const elementos = document.getElementsByClassName('elemento');
    for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i];
        elemento.addEventListener('click', selecionar),
        elemento.addEventListener('dblclick', retirarSelecao)
    }
    const calcular = document.getElementById('botao');
    calcular.addEventListener('click', calcularDano)
}

function selecionar(evento) {
    let elementoSelecionado = evento.target.parentElement;
    elementoSelecionado.style.border = "3px solid royalblue";
    var idElemento = elementoSelecionado.id;
    var divPai = elementoSelecionado.parentElement;
    var nameElemento = divPai.getAttribute("name");
    if (nameElemento == "personagens") {
        personagemSelecionado = idElemento
    }
    else {
        armaSelecionada = idElemento
    }

}

function retirarSelecao(evento) {
    let limparElemento = evento.target.parentElement;
    limparElemento.removeAttribute("style")
}

function calcularDano(evento) {
    let botaoCalcular = evento.target;
    if (armaSelecionada == "soco") {
        poderAtaque = 40
    }

    else if (armaSelecionada == "arco") {
        poderAtaque = 75
    }

    else {
        poderAtaque = 90
    }

    if (personagemSelecionado == "orc") {
        poderDefesa = 80
    }

    else if (personagemSelecionado == "goblin") {
        poderDefesa = 40
    }

    else {
        poderDefesa = 30
    }

    if (poderAtaque > poderDefesa) {
        alert("Parabéns, você conseguiu derrota-lo!")
    }

    else {
        alert("Uma pena, não foi dessa vez, tente novamente")
    }

}