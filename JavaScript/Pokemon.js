
class Pokemon {
    constructor(){
        //!Pokémon(Player) properties
    this.img = new Image()
    this.img.src= "../Images/charmander.png"
    this.x = 180;
    this.y = 580; 
    this.w = 120;
    this.h = 200;
    this.speed = 5;


    }


  //* METHODS AND ACTIONS
   draw = () =>{
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
   }

  //! Pokémon movement
   
    
  
 

}