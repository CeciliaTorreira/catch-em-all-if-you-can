
class Game {
  constructor (){

//* Background
    this.background = new Image()
    this.background.src= "Images/Bulbasaur-background.png"

    
//* POKÉMON
this.pokemon = new Pokemon()
 
  
//* POKÉBALLS
  this.pokeball = new Pokeball()
  
  this.pokeballArr = [];

  
  
//* COUNTER

this.score = Number(scoreDOM.innerText) 
                                        

//* MUSIC
this.mainTheme = new Audio("Sounds/Pokemon-BlueRed-Route-1.mp3");
this.mainTheme.volume = 0.03;
this.mainTheme.loop = true;
this.razorLeafSound = new Audio("Sounds/Razor-Leaf-Part-2.mp3")
this.razorLeafSound.volume = 0.03;
this.gameOverSound = new Audio("Sounds/Bulbasaur.mp3")
this.gameOverSound.volume = 0.03;
this.pokeballDestroyed = new Audio("Sounds/Instant-catch-sound.mp3")
this.pokeballDestroyed.volume = 0.03;
//* IS GAME ON 

this.isGameOn = true;


//* POKÉMON ATTACK
 
this.attack = undefined;
this.pokemonAttackArr = [];
this.isPokemonAttacking = true
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
    this.pokeballArr[this.pokeballArr.length - 1].y >= canvasDOM.height/6)
  {
    let randomSpawnX = Math.random() * (canvasDOM.width - this.pokeball.w)
    let pokeball = new Pokeball(randomSpawnX);
    this.pokeballArr.push(pokeball)

    if (this.score >= 250 && this.score < 500 )
     {pokeball.speed = 4
     pokeball.img.src ="Images/greatball.png"}
     
    else if (this.score >= 500 && this.score < 750 )
      {pokeball.speed = 4.25
      pokeball.img.src ="Images/ultraball.png"}
    
    else if (this.score >= 750)
      {pokeball.speed = 5
       pokeball.img.src ="Images/master-ball.png"}
  
      }

}

   
 pokeballOut = () => {
   if (this.pokeballArr[0].y > canvas.height){
    this.pokeballArr.shift()
    this.score += 10;
    scoreDOM.innerText = this.score
   };
 }

 //* COLLISIONS

 //* PLAYER AND POKÉBALL COLLISION

pokePlayerCollision = () => {

this.pokeballArr.forEach((eachPokeball) =>{

 if ( 
  this.pokemon.x < eachPokeball.x + eachPokeball.w-50 &&
  this.pokemon.x  + this.pokemon.w-50 > eachPokeball.x &&
  this.pokemon.y-50  < eachPokeball.y-50 + eachPokeball.h-50 &&
  this.pokemon.h + this.pokemon.y > eachPokeball.y+50
)  
{
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
  ) 
   {
    this.attack = undefined
    this.score += 20;
    scoreDOM.innerText = this.score
    this.pokeballDestroyed.play()
    let destroyedPokeball = this.pokeballArr.indexOf(eachPokeball)
    this.pokeballArr.splice(destroyedPokeball, 1)
    this.pokemonAttackArr.shift(this.attack)
 
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
  if (this.pokemonAttackArr.length === 0 && this.isPokemonAttacking === true) {
  this.attack = new RazorLeaf(this.pokemon.x+70, this.pokemon.y+35);
  this.razorLeafSound.play()
  this.pokemonAttackArr.push(this.attack)
  this.isPokemonAttacking = false
  setTimeout(() => {
    this.isPokemonAttacking = true;
  }, 4000);
  
  
}
}

pokemonAttackOut = () => {
  if (this.attack !== undefined && this.attack.y < 0){
   this.pokemonAttackArr.shift()
  };
}

//! EJECUTION

  gameLoop = () => {

//*  CLEAR CANVAS

this.clearCanvas()


//* MUSIC

this.mainTheme.play()


//* OBJECTS MOVEMENTS AND ACTIONS
          
this.pokePlayerCollision()  

this.attackPokeballCollision()

this.addPokeball()
this.pokeballArr.forEach((eachPokeball) =>{
    eachPokeball.pokeballMovement()
  })


this.pokeballOut()

if (this.attack !== undefined)
{
  this.pokemonAttackOut()
}


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
