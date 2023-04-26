class Pokeball {
    constructor(posX){
    this.img = new Image()
    this.img.src= "Images/Pokéball.png"
    this.x = posX;
    this.y = 0; 
    this.w = 45;
    this.h = 45;
    this.speed = 2;  //! Will try to increase the speed as game progresses
    }

    //* METHODS AND ACTIONS
    draw = () =>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
       }
    
    pokeballMovement = () => {
        this.y += this.speed;
    }
}