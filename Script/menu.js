let iniciou = false;

function iniciarMenu() {
    if (iniciou) return;
    iniciou = true;
    document.getElementById("meuTexto").innerText = "";
    document.getElementById("menu").classList.add("menu-iniciado");
}

document.addEventListener("keydown", iniciarMenu);
document.addEventListener("click", iniciarMenu);