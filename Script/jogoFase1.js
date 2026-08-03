import Personagem from "../Entitys/personagens.js";
import Plataforma from "../Entitys/plataforma.js";
import Fase1 from "../Data/fase1.js";

const tela = document.querySelector("#tela");
const ctx = tela.getContext("2d");

tela.width = window.innerWidth;
tela.height = window.innerHeight;

const quadrado = 64;

const jogador = new Personagem(Fase1.player.x, Fase1.player.y);

function criarCenario() {
  Fase1.plataforma1.forEach((square) => {
    const p = new Plataforma(square.x, square.y, square.img);
    p.desenhar(ctx);
  });
}

const input = {
  direita: false,
  esquerda: false,
  cima: false,
  baixo: false,
};

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "d":
      input.direita = true;
      break;

    case "a":
      input.esquerda = true;
      break;

    case "w":
      input.cima = true;
      break;

    case "s":
      input.baixo = true;
      break;
  }
});

// Quando solta a tecla
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "d":
      input.direita = false;
      break;

    case "a":
      input.esquerda = false;
      break;

    case "w":
      input.cima = false;
      break;

    case "s":
      input.baixo = false;
      break;
  }
});

function desenharGrid() {
  ctx.font = "9px Arial";
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";

  for (let y = 0; y <= tela.height; y += quadrado) {
    for (let x = 0; x <= tela.width; x += quadrado) {
      ctx.strokeRect(x + 0.5, y + 0.5, quadrado, quadrado);

      ctx.fillText(`x:${x} y:${y}`, x + 2, y + 10);
    }
  }
}

function desenhar() {
  ctx.clearRect(0, 0, tela.width, tela.height);

  desenharGrid();
  criarCenario();

  jogador.atualizar(input);

  jogador.desenhar(ctx);

  requestAnimationFrame(desenhar);
}

desenhar();
