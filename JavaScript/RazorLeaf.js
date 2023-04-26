class RazorLeaf {
    constructor(posX, posY){
    this.img = new Image()
    this.img.src = "Images/leaf.png"
    this.x = posX;
    this.y = posY; 
    this.w = 15;
    this.h = 25;
    this.speed = 5; 
    }

    //* METHODS AND ACTIONS

    draw = () =>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
       }
    
    razorLeafMovement = () => {
        this.y -= this.speed;
    }

}
