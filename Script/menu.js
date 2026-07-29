

function substituirTexto() {
    const elemento = document.getElementById("meuTexto");

    // Verifica se o elemento existe antes de alterar
    if (elemento) {
        elemento.innerText = "Texto substituído com sucesso!";
    } else {
        console.error("Elemento não encontrado!");
    }
}