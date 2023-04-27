

//* GLOBAL VARIABLES 
const canvasDOM = document.querySelector("#canvas")
const startButtonDOM = document.querySelector(".startgame, .startbutton") 
const startGameDOM = document.querySelector(".startgame") //! START GAME SCREEN
const gameOverButtonDOM = document.querySelector(".gameoverbutton")
const gameOverScreenDOM = document.querySelector(".gameover")
const replayDOM = document.querySelector(".restartbutton")
const scoreDOM = document.querySelector("h2") 
const ctx = canvasDOM.getContext("2d")



let gameObj;

//* FUNCTIONS SECTIONS

const startGame = ()=>{

//1. Changing screens
canvasDOM.style.display = "block";
startGameDOM.style.display ="none";
scoreDOM.innerText = 000;

//2. Creating elements
gameObj = new Game()  


//3 Starting recursion
gameObj.gameLoop()

}

const replayGame = () =>{

  gameOverScreenDOM.style.display = "none";
  canvasDOM.style.display = "block";
  scoreDOM.innerText = 000;
  gameObj = new Game();
  gameObj.gameLoop();

}   




//* ADDEVENTLISTENERS

startButtonDOM.addEventListener("click", startGame) 

replayDOM.addEventListener("click", replayGame)

window.addEventListener("keydown", (event)=>{
  gameObj.pokemon.pokemonMovement(event)
})  


window.addEventListener("keydown", ()=>{
  if (event.code === "Space"){
    gameObj.pokemonAttack()
  }

})

