const Inicio = {
    id: "Inicio",
    nome: "Inicio",
  
    tileSize: 64,
    width: 64,
    height: 64,
  
    player: {
      velocidade: 4,
      x: 1088,
      y: 576,
      img: "../Imagem/personagens/clara.png",
    },
    plataforma1: [
      {
        id: "p1_1",
        x: 128,
        y: 576,
        width: 64,
        height: 64,
        img: "",
        efeito: false,
      },
      {
        id: "p1_2",
        x: 192,
        y: 576,
        width: 64,
        height: 64,
        img: "",
  
        efeito: false,
      },
      {
        id: "p1_3",
        x: 256,
        y: 576,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_4",
        x: 320,
        y: 576,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_5",
        x: 256,
        y: 512,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_6",
        x: 320,
        y: 512,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_7",
        x: 192,
        y: 512,
        width: 64,
        height: 64,
        img: "assets/piso.png",
        efeito: false,
      },
      {
        id: "p1_8",
        x: 128,
        y: 512,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_9",
        x: 384,
        y: 576,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_10",
        x: 384,
        y: 512,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_11",
        x: 384,
        y: 448,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_12",
        x: 320,
        y: 448,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
      },
      {
        id: "p1_12",
        x: 256,
        y: 448,
        width: 64,
        height: 64,
        img: "assets/piso.png",
  
        efeito: false,
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
      x: 1152,
      y: 576,
      width: 64,
      height: 64,
      img: "",
      status: false,
      texto: "",
    }
    paredes: [
      {
        id: "parede1",
        x: 1152,
        y: 576,
        width: 64,
        height: 64,
      }
    ]
};
  
  export default Inicio;
  