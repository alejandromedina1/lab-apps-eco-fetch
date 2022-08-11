class BitcoinPrice extends Button {
    constructor({x, y, tag}) {
        super();
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.euroValue = 0;
        this.poundValue = 0;
        this.dollarValue = 0;
    }
    async getBitcoinPrice() {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        const result = await data.bpi
        console.log(result);
        const euroPrice = await result.EUR
        const poundPrice = await result.GBP
        const usdPrice = await result.USD
        this.euroValue = await euroPrice.rate;
        this.poundValue = await poundPrice.rate;
        this.dollarValue = await usdPrice.rate;
    }

    showInfo() {
        if (this.isSelected && this.getBitcoinPrice !== undefined) {
            fill(255);
            textWrap(WORD);
            textSize(20);
            textAlign(LEFT, CENTER);
            text('EUR: ' + this.euroValue, 100, 550, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('BPS: ' + this.poundValue, 100, 600, 520)
            textAlign(LEFT, CENTER);
            textSize(20);
            text('USD: ' + this.dollarValue, 100, 650, 520)
            
        }
    }
}