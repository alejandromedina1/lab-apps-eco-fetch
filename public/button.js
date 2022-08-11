class Button {
    constructor() {
        this.r = 0;
        this.g = 50;
        this.b = 255;
        this.isSelected = false;
        
    }
    render() {
        textSize(13);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(this.x, this.y, 200, 50, 10);
        rectMode(CORNER);
        fill(255);
        textAlign(CENTER, CENTER);
        text(this.tag, this.x, this.y);
        this.changeStatus()
    }
    activate() { 
        const WIDTH = 200/2
        const HEIGHT = 50/2
        if (  this.x - WIDTH < mouseX && mouseX < this.x + WIDTH && this.y - HEIGHT < mouseY && mouseY < this.y + HEIGHT ) {
            this.isSelected = true
        } else {
            this.isSelected = false
        }
    }
    changeStatus() {
        if (this.isSelected === true) {
            this. r = 255;
        } else {
            this.r = 0;
        }
    }
}