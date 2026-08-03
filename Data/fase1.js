const Fase1 = {
    id: "Fase1",
    nome: "Fase1",
  
    tileSize: 64,
    width: 64,
    height: 64,
  
    player: {
      velocidade: 4,
      x: 1088,
      y: 512,
      img: "../Imagem/personagens/clara.png",
    },
    plataforma1: [
        {
          id: "",
          x: 128,
          y: 576,
          width: 64,
          height: 64,
          img: "",
          efeito: false,
        },
    ],
    paredes: [
        {
            id: "",
            x: 1152,
            y: 405,
            width: 64,
            height: 64,
        },
    ],
    caixa1: {
        id: "",
        x: 64,
        y: 0,
        width: 64,
        height: 64,
        img: "",
        efeito: {
          status: true,
        },
      },
};

export default Fase1;