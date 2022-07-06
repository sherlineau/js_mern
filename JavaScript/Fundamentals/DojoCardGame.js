// parent class card -> all card types will inherit from this class
class Card {
    constructor (name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

// Unit Class extends from card class
class Unit extends Card {
    constructor( name, cost, power, res) {
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack( target ) {
        if (target instanceof Unit) {
            target.res -= this.power;
            if (target.res < 0) {
                console.log(`${this.name} defeated ${target.name}`)
            } else {
                console.log(`${this.name} attacked ${target.name}! ${target.name}'s resilence is now ${target.res}`)
            }
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

// Effect Class extends from card class
class Effect extends Card {
    constructor ( name, cost, stat, magnitude) {
        super(name,cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play ( target ) {
        if (target instanceof Unit) {
            if (this.stat==='res') {
                target.res += this.magnitude;
                console.log(`Played ${this.name} on ${target.name}! ${target.name}'s resilience is now ${target.res} `)
            } else {
                target.power += this.magnitude;
                console.log(`Played ${this.name} on ${target.name}! ${target.name}'s power is now ${target.res} `)
            }
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

//create instance of red belt ninja
const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);

//create instance of hard algorithm and play it on red belt ninja
const hardAlgo = new Effect("Hard Algorithm",2,'res',3);
hardAlgo.play(redNinja)

//create instance black belt ninja
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//create instance of rejection and play on red belt ninja
const rejection = new Effect("Unhandled Promise Rejection",1,'res',-2);
rejection.play(redNinja)

//create instance of pair programming and play it on red belt ninja
const pairProg = new Effect("Pair Programming",3,'power',2);
pairProg.play(redNinja)

redNinja.attack(blackNinja)
