
class Game {
  constructor (){

//* Background
    this.background = new Image()
    this.background.src= "../Images/Bulbasaur-background.png"  //! Background used to be different but didn't look too good

    
//* POKÉMON
this.pokemon = new Pokemon() //! Creating a Pokémon/Player using the class in Pokemon.js
 console.log(this.pokemon)
  
//* POKÉBALLS
  this.pokeball = new Pokeball()
  console.log(this.pokeball)
  this.pokeballArr = [];
  
//* COUNTER

this.score = Number(scoreDOM.innerText) //! Implemented function to update the score each time a Pokéball goes out of the canvas.
                                        //! Needs improvement so the score goes up each time you destroy a Pokéball.
//* WIP

//* GAME OVER
// WIP
this.isGameOn = true;
}


//! FUNCTIONS AND METHODS

  //* CANVAS
  clearCanvas = () =>{
    ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height)
  }

 //* BACKGROUND
 drawBackground = ()=> {
   ctx.drawImage(this.background, 0, 0, canvasDOM.width, canvasDOM.height)
}
 //* POKÉBALL
 addPokeball = () =>{
  
  if (this.pokeballArr.length === 0 || 
    this.pokeballArr[this.pokeballArr.length - 1].y >= canvasDOM.height/3)
  {
    let randomSpawnX = Math.random() * (canvasDOM.width - this.pokeball.w)
    let pokeball = new Pokeball(randomSpawnX);
    this.pokeballArr.push(pokeball)
  }
}
 //? Al principio aparecen las Pokéball pero no siguen generándose y apareciendo.
 //? Estoy siguiendo como referencia el método de aparición de los tubos que usamos en el flappy bird
//! SORTED
  
 pokeballOut = () => {
   if (this.pokeballArr[0].y === canvas.height){
    this.score += 10;
    scoreDOM.innerText = this.score
    this.pokeballArr.shift()
   }
 }

 //* COLLISIONS

 //* Player and Pokéball collision
  pokePlayerCollision = () => {

this.pokeballArr.forEach((eachPokeball) =>{

 if (
  this.pokemon.x < eachPokeball.x + eachPokeball.w-50 &&
  this.pokemon.x  + this.pokemon.w-50 > eachPokeball.x&&
  this.pokemon.y-50  < eachPokeball.y-50 + eachPokeball.h-50 &&
  this.pokemon.h + this.pokemon.y > eachPokeball.y
)  {
console.log("You got caught!")  //! We'll implement game over later
 
   } 
 })
}



//! EJECUTION
  gameLoop = () => {


 

//*  CLEAR CANVAS
this.clearCanvas()


//* OBJECTS MOVEMENTS AND ACTIONS
// this.pokeball.pokeballMovement()   //! POkéball falling added to test for later 
                                   //! (I'll create an array and make them randomly appear falling from the top of the canvas)

this.pokePlayerCollision()                                

this.addPokeball()
this.pokeballArr.forEach((eachPokeball) =>{
    eachPokeball.pokeballMovement()
  })
this.pokeballOut()



//* ELEMENTS ON CANVAS
this.drawBackground()

this.pokemon.draw()

this.pokeballArr.forEach((eachPokeball) => {
  eachPokeball.draw()
})



//*  RECURSION 
if(this.isGameOn === true){
  requestAnimationFrame(this.gameLoop)
}
 }
  

}
