document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("leitor").addEventListener("click", ativarLeitor);
    document.getElementById("contraste").addEventListener("click", toggleContraste);
    document.getElementById("libras").addEventListener("click", abrirLibras);
    document.getElementById("aumentarTexto").addEventListener("click", aumentarTexto);
    document.getElementById("diminuirTexto").addEventListener("click", diminuirTexto);
    escreverTitulo();
});

// Efeito de digitação no título
function escreverTitulo() {
    let titulo = "Bem-vindo ao Site Acessível!";
    let i = 0;
    let elemento = document.getElementById("titulo");
    elemento.innerHTML = "";

    function escrever() {
        if (i < titulo.length) {
            elemento.innerHTML += titulo.charAt(i);
            i++;
            setTimeout(escrever, 100);
        }
    }
    escrever();
}

// Ativar leitor de tela
function ativarLeitor() {
    let texto = document.body.innerText;
    let synth = window.speechSynthesis;
    let voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "pt-BR";
    synth.speak(voz);
}

// Alternar alto contraste
function toggleContraste() {
    document.body.classList.toggle("contraste-alto");
}

// Abrir um vídeo de Libras
function abrirLibras() {
    window.open("https://www.youtube.com/watch?v=b4B8V7nUF7g", "_blank");
}

// Abrir e fechar abas
function abrirAba(aba) {
    let abas = document.querySelectorAll(".aba-conteudo");
    abas.forEach(a => a.style.display = "none");
    
    document.getElementById(aba).style.display = "block";
}

// Ajustar tamanho do texto
function aumentarTexto() {
    document.body.style.fontSize = "larger";
}

function diminuirTexto() {
    document.body.style.fontSize = "smaller";
}