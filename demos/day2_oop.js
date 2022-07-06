class Developer {
    //makes a instance of developers with these attributes
    constructor(dev_name, health = 100, braincell = 1) {
        this.name = dev_name
        this.languages = ["Python","MERN","JAVA", "C#"]
        this.health = health
        this.braincell = braincell
    }

    //method : what it DOES
    sleep(){
        console.log("ZzzZzzZzz")
        this.braincell += 5
        this.health += 10
        // return this to chain methods
        return this
    }

    completeProject(title) {
        //normal string + variable name
        console.log("Completing a project named " + title)
        // formatting a string with ` and $
        console.log(`${this.name} completed a project named ${title}`)
        
        this.health -=15
        this.braincell += 2
        return this
    }
}

//junior developer is a type of developer -> child/subclass of Developer
//super allows child class to inherit properties and METHODS of the parent class
// jundev will have access to all developer methods
class JuniorDeveloper extends Developer {
    constructor() {
        super("Another Junior Developer", 70, 10) //super calls the constructor of Developer class
        this.excitementLevel = 100
    }
}



const dev1 = new Developer("Heidi")
const dev2 = new Developer("Max", 80, 5)
//runs the sleep method and increases braincells and health of dev1
//chain methods
dev1.sleep().sleep().sleep().sleep()
console.log(dev1)
dev2.completeProject("C# project")
console.log(dev2)

const junDev = new JuniorDeveloper()
junDev.completeProject("Random number generator")
console.log(junDev)

