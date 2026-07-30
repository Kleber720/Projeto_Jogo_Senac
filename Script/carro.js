const carro1 = document.querySelector("#carro")
const carro2 = document.querySelector("#carro2")

const listaURL = ["../Imagem/carro-vermei.png","../Imagem/carro-rosa.png"]

const random = Math.floor(Math.random()* listaURL.length)

const itemRandom = listaURL[random]

carro1.style.backgroundImage = `url(${itemRandom})`;