
class Game {
  constructor (){

    //* Background
    this.background = new Image()
    this.background.src= "../Images/background1.jpg"

    
  //* POKÉMON
  this.pokemon = new Pokemon() //! Creating a Pokémon/Player using the class in Pokemon.js
 console.log(this.pokemon)
  //* POKÉBALLS


  //* COUNTER

  }
   
  clearCanvas = () =>{
    ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height)
  }

 //* CANVAS ELEMENTS
 drawBackground = ()=> {
    ctx.drawImage(this.background, 0, 0, canvasDOM.width, canvasDOM.height)
}



//! EJECUTION
  gameLoop = () => {


 

//*  CLEAR CANVAS

this.clearCanvas()

//* OBJECTS MOVEMENTS AND ACTIONS



//* ELEMENTS ON CANVAS
this.drawBackground()
this.pokemon.draw()






//*  RECURSION 
  requestAnimationFrame(this.gameLoop)
 }
  
}
