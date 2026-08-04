const Fase3 = {
  id: "Fase3",
  nome: "Fase3",

  tileSize: 64,
  width: 64,
  height: 64,

  player: {
    velocidade: 4,
    x: 128,
    y: 128,
    img: "../Imagem/personagens/clara.png",
  },
  plataforma1: [
    {
      id: "ch_1",
      x: 128,
      y: 128,
      width: 64,
      height: 64,
      img: "",
      efeito: false,
    },
  ],
  // PAREDES INVISÍVEIS — cada objeto é um retângulo de colisão
  // x, y = posição do pixel (canto superior esquerdo)
  // width, height = tamanho da área bloqueada
  paredes: [
    {
        id: "parede_1",
        x: 1152,
        y: 405,
        width: 64,
        height: 64,
    },
  ],
  caixa1: {
    id: "c1_1",
    x: 64,
    y: 0,
    width: 64,
    height: 64,
    img: "",
    efeito: {
      status: true,
    },
  },
  elemento1: {
    id: "e1_1",
    x: 64,
    y: 0,
    width: 64,
    height: 64,
    img: "",
    status: true,
    texto: "",
  },
};

export default Fase3;

