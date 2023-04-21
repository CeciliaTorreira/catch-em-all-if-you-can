console.log("Comprobando")

//* GLOBAL VARIABLES 
const canvasDOM = document.querySelector("#canvas") //!CANVAS
const startButtonDOM = document.querySelector(".startgame img") //! IMAGEN DE START
const startGameDOM = document.querySelector(".startgame img") //! PANTALLA DE INICIO

const ctx = canvasDOM.getContext("2d")

let gameObj;

//* FUNCTIONS SECTIONS

const startGame = ()=>{
console.log("Iniciando juego")

//1. Changing screens
canvasDOM.style.display = "block";
startGameDOM.style.display="none";


//2. Creating elements
gameObj = new Game()  //! Class created in Game.js
console.log("Game")

//3 Starting recursion
gameObj.gameLoop()

}




//* ADDEVENTLISTENERS

startButtonDOM.addEventListener("click", startGame) 

window.addEventListener("keydown", event)  //! TERMINAR
