import Inicio from "../Data/inicio.js";


class Personagem {
    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.velocidade = Inicio.player.velocidade;

        // SPRITE
        this.img = new Image();
        this.img.src = Inicio.player.img;

        this.tamanho = 63;

        // DIREÇÃO
        this.direcao = "baixo";
        this.estado = "idle";

        // ANIMAÇÃO
        this.linha = 0;

        this.framesWalk = [0,1,2,3];

        this.indiceFrame = 0;
        this.frame = 0;

        this.tempoFrame = 0;
        this.intervaloFrame = 120; // ↑ mais estável (100 pode ficar rápido demais)

    }

    atualizar(input, deltaTime){

        this.mover(input);
        this.animar(deltaTime);

    }

    mover(input){

        let andando = false;

        if(input.direita){
            this.x += this.velocidade;
            this.direcao = "direita";
            andando = true;
        }

        if(input.esquerda){
            this.x -= this.velocidade;
            this.direcao = "esquerda";
            andando = true;
        }

        if(input.cima){
            this.y -= this.velocidade;
            this.direcao = "cima";
            andando = true;
        }

        if(input.baixo){
            this.y += this.velocidade;
            this.direcao = "baixo";
            andando = true;
        }

        this.estado = andando ? "walk" : "idle";
    }

    animar(deltaTime){

        // direção → linha correta da sprite
        if(this.direcao === "baixo") this.linha = 0;
        if(this.direcao === "direita") this.linha = 1;
        if(this.direcao === "cima") this.linha = 2;
        if(this.direcao === "esquerda") this.linha = 3;

        // idle trava frame
        if(this.estado === "idle"){
            this.frame = 0;
            this.indiceFrame = 0;
            this.tempoFrame = 0;
            return;
        }

        // segurança caso deltaTime venha quebrado
        if(!deltaTime) deltaTime = 16;

        this.tempoFrame += deltaTime;

        // loop de animação estável
        while(this.tempoFrame >= this.intervaloFrame){

            this.tempoFrame -= this.intervaloFrame;

            this.indiceFrame = (this.indiceFrame + 1) % this.framesWalk.length;

            this.frame = this.framesWalk[this.indiceFrame];
        }
    }

    desenhar(ctx){

        if(!this.img.complete) return;

        ctx.drawImage(

            this.img,

            this.frame * this.tamanho,
            this.linha * this.tamanho,

            this.tamanho,/* x*/
            this.tamanho,/* y*/

            this.x,
            this.y,

            this.tamanho,
            this.tamanho

        );
    }
}

export default Personagem;