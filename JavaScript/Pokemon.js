
class Pokemon {
    constructor(){
        //!Pokémon(Player) properties
    this.img = new Image()
    this.img.src= "Images/bulbasaur.png"  //! Pokémon was Charmander at first, I changed it
    this.x = 180;
    this.y = 500; 
    this.w = 150;
    this.h = 200;
                  //* At first I added the pokemon speed thinking I could make it go constantly up creating the effect you were advancing through
                  //* the canvas and you had to control that to avoid the enemies but it didn't work out with the background and I discarded the idea


     


    }


  //* METHODS AND ACTIONS
   draw = () =>{
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
   }

  //! Pokémon movement
 
  pokemonMovement = (event) => {
    if (event.code === "ArrowRight" && this.x <= canvas.width - 110) {
      this.x += 6;
      console.log("Pressing right key")
    }
    if (event.code === "ArrowLeft" && this.x >= -40) {
      this.x -= 6;
      console.log("Pressing left key")
    }
    if (event.code === "ArrowUp" && this.y >= -50) {
      this.y -= 6;
      console.log("Pressing up key")
    }
    if (event.code === "ArrowDown" && this.y <= canvas.height - this.w) {
      this.y += 6;
      console.log("Pressing down key")        //! Console log working.
    }
    //if (event.code === "ArrowRight" && event.code === "ArrowUp" && this.x <= canvas.width - this.w) {
    //  this.x += 4;                                    //! I achieved diagonal movement but it was not as good as I expected.
    //  this.y -= 4;                                    //todo Will work on that as a
    
  };
}


