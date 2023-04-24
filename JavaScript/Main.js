console.log("Comprobando")

//* GLOBAL VARIABLES 
const canvasDOM = document.querySelector("#canvas") //!CANVAS
const startButtonDOM = document.querySelector(".startgame, .startbutton") //! START BUTTON PICTURE
const startGameDOM = document.querySelector(".startgame") //! START SCREEN
const gameOverDOM = document.querySelector(".gameoverbutton")
const scoreDOM = document.querySelector("h2") //! SCORE
const ctx = canvasDOM.getContext("2d")


gameOverDOM.style.display="none";
let gameObj;

//* FUNCTIONS SECTIONS

const startGame = ()=>{
console.log("Iniciando juego")

//1. Changing screens
canvasDOM.style.display = "block";
startGameDOM.style.display ="none";
scoreDOM.innerText = 00

//2. Creating elements
gameObj = new Game()  //! Class created in Game.js
console.log(gameObj)

//3 Starting recursion
gameObj.gameLoop()

}




//* ADDEVENTLISTENERS

startButtonDOM.addEventListener("click", startGame) 

window.addEventListener("keydown", (event)=>{
  gameObj.pokemon.pokemonMovement(event)
})  
