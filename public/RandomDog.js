class RandomDog extends Button {
    constructor({x, y, tag}) {
        super();
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.img = undefined
    }
    async getRandomDogImage() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        this.img = loadImage(data.message);
        console.log(data.message);
    }
    
    showInfo() {
        imageMode(CENTER);
        if (this.img!== undefined) {
            image(this.img, 350, 650);
        }
    }
}