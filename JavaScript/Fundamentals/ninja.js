class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(`Hi ${this.name}!`)
    }

    showStats(){
        console.log(this)
        return this
    }

    drinkSake(){
        this.health+= 10
        console.log(`${this.name} drank some sake. Health increased to ${this.health}`)
        return this
    }
}

const ninja1 = new Ninja("Sherline",100)
ninja1.showStats().drinkSake()