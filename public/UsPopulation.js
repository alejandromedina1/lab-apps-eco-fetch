class UsPopulation extends Button {
    constructor({x, y, tag}) {
        super();
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.years = []
        this.populations = [];
    }
    async getUsPopulation() {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        const result = await data.data
        this.years[0] = result[0].Year;
        this.populations [0] = result[0].Population;
        this.years[1] = result[1].Year;
        this.populations [1] = result[1].Population;
        this.years[2] = result[2].Year;
        this.populations [2] = result[2].Population;
        this.years[3] = result[3].Year;
        this.populations [3] = result[3].Population;
        this.years[4] = result[4].Year;
        this.populations [4] = result[4].Population;
        this.years[5] = result[5].Year;
        this.populations [5] = result[5].Population;
    }
    showInfo() {
        if (this.isSelected && this.getUsPopulation !== undefined) {
            fill(255);
            textWrap(WORD);
            textSize(20);
            textAlign(LEFT, CENTER);
            text('Year: ' + this.years[0] + ' - Population: ' + this.populations[0], 100, 500, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('Year: ' + this.years[1] + ' - Population: ' + this.populations[1], 100, 540, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('Year: ' + this.years[2] + ' - Population: ' + this.populations[2], 100, 580, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('Year: ' + this.years[3] + ' - Population: ' + this.populations[3], 100, 620, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('Year: ' + this.years[4] + ' - Population: ' + this.populations[4], 100, 660, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('Year: ' + this.years[5] + ' - Population: ' + this.populations[5], 100, 700, 520)
        }
    }
}