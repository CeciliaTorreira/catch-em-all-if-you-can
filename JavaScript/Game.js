
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

  //* COUNTER

  }
   
  clearCanvas = () =>{
    ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height)

  }

 //* BACKGROUND
 drawBackground = ()=> {
   ctx.drawImage(this.background, 0, 0, canvasDOM.width, canvasDOM.height)
}



//! EJECUTION
  gameLoop = () => {


 

//*  CLEAR CANVAS
this.clearCanvas()


//* OBJECTS MOVEMENTS AND ACTIONS
this.pokeball.pokeballMovement()   //! POkéball falling added to test for later 
                                   //! (I'll create an array and make them randomly appear falling from the top of the canvas)

//* ELEMENTS ON CANVAS
this.drawBackground()

this.pokemon.draw()

this.pokeball.draw()





//*  RECURSION 
  requestAnimationFrame(this.gameLoop)
 }
  

}
