
class Game {
  constructor (){

//* Background
    this.background = new Image()
    this.background.src= "Images/Bulbasaur-background.png" //! Background used to be different but didn't look too good

    
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

//* MUSIC
this.mainTheme = new Audio("Sounds/Pokemon-BlueRed-Route-1.mp3");
this.mainTheme.loop = true;
this.razorLeafSound = new Audio("Sounds/Razor-Leaf-Part-2.mp3")
this.gameOverSound = new Audio("Sounds/Bulbasaur.mp3")
this.pokeballDestroyed = new Audio("Sounds/Instant-catch-sound.mp3")

//* IS GAME ON 

this.isGameOn = true;


//* POKÉMON ATTACK
 
this.attack = undefined;
 

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

    if (this.score >= 150 && this.score < 300 )
     {pokeball.speed = 2.5
     pokeball.img.src ="Images/greatball.png"}
     
    else if (this.score >= 300 && this.score < 450 )
      {pokeball.speed = 2.75
      pokeball.img.src ="Images/ultraball.png"}
    
    else if (this.score >= 450)
      {pokeball.speed = 3
       pokeball.img.src ="Images/master-ball.png"}
  
      }

}
 //? Al principio aparecen las Pokéball pero no siguen generándose y apareciendo.
 //? Estoy siguiendo como referencia el método de aparición de los tubos que usamos en el flappy bird
//! SORTED
   
 pokeballOut = () => {
   if (this.pokeballArr[0].y > canvas.height){
    this.pokeballArr.shift()
    this.score += 10;
    scoreDOM.innerText = this.score
   };
 }

 //* COLLISIONS

 //* Player and Pokéball collision
  pokePlayerCollision = () => {

this.pokeballArr.forEach((eachPokeball) =>{

 if ( 
  this.pokemon.x < eachPokeball.x + eachPokeball.w-50 &&
  this.pokemon.x  + this.pokemon.w-50 > eachPokeball.x &&
  this.pokemon.y-50  < eachPokeball.y-50 + eachPokeball.h-50 &&
  this.pokemon.h + this.pokemon.y > eachPokeball.y+50
)  {
console.log("You got caught!")  //! We'll implement game over later
this.gameOver()
   } 
 })
}


//* POKÉMON ATTACK AND POKÉBALL COLLISSION 

attackPokeballCollision = () => {

  this.pokeballArr.forEach((eachPokeball) =>{
  
   if ( 
    this.attack !== undefined &&
    this.attack.x < eachPokeball.x + eachPokeball.w &&
    this.attack.x + this.attack.w > eachPokeball.x &&
    this.attack.y < eachPokeball.y + eachPokeball.h &&
    this.attack.h + this.attack.y > eachPokeball.y
  )  {
    this.attack = undefined
    this.score += 20;
    scoreDOM.innerText = this.score
   // this.pokeballDestroyed.play()
  console.log("Pokéball destroyed") 
     } 
   })
  }




//* GAME OVER 

gameOver = () => {

  this.isGameOn = false;
  this.mainTheme.pause();
  canvasDOM.style.display = "none";
  gameOverScreenDOM.style.display = "flex";
  this.gameOverSound.play()

}  

//* POKÉMON ATTACK

pokemonAttack = () =>{
  this.attack = new RazorLeaf(this.pokemon.x+70, this.pokemon.y+35);
  this.razorLeafSound.play()
  
}
 

//! EJECUTION

  gameLoop = () => {

//*  CLEAR CANVAS
this.clearCanvas()

//* MUSIC
this.mainTheme.play()
//* OBJECTS MOVEMENTS AND ACTIONS
// this.pokeball.pokeballMovement()   //! POkéball falling added to test for later 
                                   //! (I'll create an array and make them randomly appear falling from the top of the canvas)

this.pokePlayerCollision()     
this.attackPokeballCollision()

this.addPokeball()
this.pokeballArr.forEach((eachPokeball) =>{
    eachPokeball.pokeballMovement()
  })


this.pokeballOut()


//* ELEMENTS ON CANVAS
this.drawBackground()

this.pokemon.draw()
if (this.attack !== undefined){
  this.attack.draw()
  this.attack.razorLeafMovement() 
}

this.pokeballArr.forEach((eachPokeball) => {
  eachPokeball.draw()
})

//*  RECURSION 
if (this.isGameOn === true){
  requestAnimationFrame(this.gameLoop)
}
 }
  

}
