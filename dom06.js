console.log("Hello, World.")

//Captira referĂȘncias do DOM
const eP = document.querySelector("p")
const eButton = document.querySelector("button")

function mudaTexto(){
    console.log("mudaText chamada")
    eP.textContent = "Ok, funcionou."
}

function ouvinteClick(event){
    console.log("oucinteClick")
    mudaTexto()
}

eButton.addEventListener("click", ouvinteClick)
