
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

this.score = scoreDOM.innerText //! Má tarde usaré la variable para implementar la función de contador por cada Pokéball destruida/esquivada 

//* WIP

//* GAME OVER
// WIP

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
//! SOLUCIONADO

//! EJECUTION
  gameLoop = () => {


 

//*  CLEAR CANVAS
this.clearCanvas()


//* OBJECTS MOVEMENTS AND ACTIONS
// this.pokeball.pokeballMovement()   //! POkéball falling added to test for later 
                                   //! (I'll create an array and make them randomly appear falling from the top of the canvas)

                                   

this.addPokeball()
this.pokeballArr.forEach((eachPokeball) =>{
    eachPokeball.pokeballMovement()
  })
  

//* ELEMENTS ON CANVAS
this.drawBackground()

this.pokemon.draw()

this.pokeballArr.forEach((eachPokeball) => {
  eachPokeball.draw()
})







//*  RECURSION 
  requestAnimationFrame(this.gameLoop)
 }
  

}
