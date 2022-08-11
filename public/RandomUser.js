class RandomUser extends Button {
    constructor({x, y, tag}) {
        super();
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.user = undefined
        this.profilePic = undefined
    }
    async getRandomUser() {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const result = await data.results[0];
        console.log(result);
        this.user = {
            title: result.name.title,
            firstName: result.name.first,
            lastName: result.name.last,
            id: result.id.value,
            gender: result.gender,
            age: result.dob.age,
            birthday: result.dob.date,
            country: result.location.country,
            city: result.location.city,
            phone: result.phone,
            email: result.email,
        }
        //console.log(result);
    }

    showInfo() {
        if (this.isSelected && this.user !== undefined) {
            fill(255);
            textWrap(WORD);
            textSize(15);
            textAlign(LEFT, CENTER);
            text('Title : ' + this.user.title, 100, 490, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('First name: ' + this.user.firstName, 100, 520, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Last name: ' + this.user.lastName, 100, 550, 520)
            if (this.user.id !== null ) {
                textAlign(LEFT, CENTER);
                textSize(15);
                text('ID: ' + this.user.id, 400, 520, 520)
            }
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Gender: ' + this.user.gender, 100, 580, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Age: ' + this.user.age, 400, 550, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Birthday: ' + this.user.birthday, 400, 580, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Country: ' + this.user.country, 100, 610, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('City: ' + this.user.city, 100, 640, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Phone: ' + this.user.phone, 100, 670, 520)
            textAlign(LEFT, CENTER);
            textSize(15);
            text('Email: ' + this.user.email, 100, 700, 520)
        }
    }
}