import Personagem from "../Entitys/personagens.js";
import Plataforma from "../Entitys/plataforma.js";
import Inicio from "../Data/inicio.js"

const tela = document.querySelector("#tela");
const ctx = tela.getContext("2d");

tela.width = window.innerWidth;
tela.height = window.innerHeight;

const quadrado = 64;

const jogador = new Personagem(
    Inicio.player.x,
    Inicio.player.y
);

function criarCenario() {
  Inicio.plataforma1.forEach((square) => {
    const p = new Plataforma(square.x, square.y, square.img);
    p.desenhar(ctx);
  });
}

function colidiu(player, paredes) {
  return (
      player.x < paredes.x + paredes.width &&
      player.x + 63 > paredes.x &&
      player.y < paredes.y + paredes.height &&
      player.y + 63 > paredes.y
  );
}

function podeMover(novoX, novoY) {

  const futuroPlayer = {
      x: novoX,
      y: novoY
  };

  for (const paredes of Inicio.paredes) {
      if (colidiu(futuroPlayer, paredes)) {
          return false;
      }
  }

  return true;
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

let ultimoTempo = 0;

function desenhar(tempoAtual) {

    const deltaTime = tempoAtual - ultimoTempo;
    ultimoTempo = tempoAtual;

    ctx.clearRect(0, 0, tela.width, tela.height);

    desenharGrid();
    criarCenario();

    jogador.atualizar(input, deltaTime);

    jogador.desenhar(ctx);

    requestAnimationFrame(desenhar);
}

requestAnimationFrame(desenhar);