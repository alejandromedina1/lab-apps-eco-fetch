class RandomFactAboutCats extends Button {
    constructor({x, y, tag}) {
        super();
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.fact = '';
    }
    async getRandomCatsFact() {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const result = await data.fact
        console.log(result);
        this.fact = result;
    }

    showInfo() {
        if (this.isSelected && this.getRandomCatsFact !== undefined) {
            fill(255);
            textAlign(LEFT, CENTER);
            textWrap(WORD);
            textSize(20);
            text(this.fact, 100, 550, 520)
        }
    }
}