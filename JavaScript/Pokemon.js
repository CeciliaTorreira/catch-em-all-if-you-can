
class Pokemon {
    constructor(){
        //!Pokémon(Player) properties
    this.img = new Image()
    this.img.src= "Images/bulbasaur.png"  //! Pokémon was Charmander at first, I changed it
    this.x = 180;
    this.y = 500; 
    this.w = 150;
    this.h = 200;
    this.speed = 7;


     


    }


  //* METHODS AND ACTIONS
   draw = () =>{
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
   }

  //! Pokémon movement
 
  pokemonMovement = (event) => {
    if (event.code === "ArrowRight" && this.x <= canvas.width - 110) {
      this.x += this.speed;
      
    }
    if (event.code === "ArrowLeft" && this.x >= -40) {
      this.x -= this.speed;
      
    }
    if (event.code === "ArrowUp" && this.y >= -50) {
      this.y -= this.speed;
      
    }
    if (event.code === "ArrowDown" && this.y <= canvas.height - this.w) {
      this.y += this.speed;
      
    }
    //if (event.code === "ArrowRight" && event.code === "ArrowUp" && this.x <= canvas.width - this.w) {
    //  this.x += 4;                                    //! I achieved diagonal movement but it was not as good as I expected.
    //  this.y -= 4;                                    
    
  };
}


