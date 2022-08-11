let canvas;
let buttons = []
buttons [0] = new RandomUser({x: 200, y: 100, tag: 'Get Random User'});
buttons [1] = new BitcoinPrice({x: 200, y: 200, tag: 'Get Bitcoin Price'});
buttons [2] = new UsPopulation({x: 500, y: 100, tag: 'Get US Population'});
buttons [3] = new RandomDog({x: 500, y: 200, tag: 'Get Random Dog'});
buttons [4] = new RandomFactAboutCats({x: 350, y: 300, tag: 'Get Random Fact about Cats'});

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0);
    displayGap();
    buttons.forEach(button => {
        button.render()
        if (button.isSelected && button instanceof RandomUser) {
            button.showInfo();
        }
        if (button.isSelected && button instanceof BitcoinPrice) {
            button.showInfo();
        }
        if (button.isSelected && button instanceof UsPopulation) {
            button.showInfo();
        }
        if (button.isSelected && button instanceof RandomDog) {
            button.showInfo();
        }
        if (button.isSelected && button instanceof RandomFactAboutCats) {
            button.showInfo();
        }
    });
    newCursor();
}

function mousePressed() {
    buttons.forEach(button => {
        button.activate();
        if (button.isSelected && button instanceof RandomUser) {
            button.getRandomUser();
        }
        if (button.isSelected && button instanceof BitcoinPrice) {
            button.getBitcoinPrice();
        }
        if (button.isSelected && button instanceof UsPopulation) {
            button.getUsPopulation();
        }
        if (button.isSelected && button instanceof RandomDog) {
            button.getRandomDogImage();
        }
        if (button.isSelected && button instanceof RandomFactAboutCats) {
            button.getRandomCatsFact();
        }
    });
}

function displayGap() {
    fill(40);
    rectMode(CENTER);
    rect(350, 650, 600, 500, 50);
    rectMode(CORNER);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}