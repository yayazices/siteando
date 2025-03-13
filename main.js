document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("leitor").addEventListener("click", ativarLeitor);
    document.getElementById("contraste").addEventListener("click", toggleContraste);
    document.getElementById("aumentarTexto").addEventListener("click", aumentarTexto);
    document.getElementById("diminuirTexto").addEventListener("click", diminuirTexto);
});

function ativarLeitor() {
    let texto = document.body.innerText;
    let synth = window.speechSynthesis;
    let voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "pt-BR";
    synth.speak(voz);
}

function toggleContraste() {
    document.body.classList.toggle("contraste-alto");
}

function aumentarTexto() {
    document.body.style.fontSize = "larger";
}

function diminuirTexto() {
    document.body.style.fontSize = "smaller";
}