class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`Hi ${this.name}!`);
    }

    showStats(){
        console.log(this);
        return this
    }

    drinkSake(){
        this.health+= 10;
        console.log(`${this.name} drank some sake. Health increased to ${this.health}`);
        return this
    }
}

class Sensei extends Ninja {
    constructor (name) {
        //pass sensei's name and default values for health, speed, strength to parent Ninja class constructor
        super(name,200,10,10);

        //sensei specific attributes
        this.wisdom = 10;
    }

    speakWisdom () {
        //calls function from parent class
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Sherline",100);
ninja1.showStats().drinkSake();

const sensei1 = new Sensei("Heidi");
sensei1.speakWisdom();
sensei1.showStats();