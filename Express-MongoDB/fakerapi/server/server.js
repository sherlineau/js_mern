// 1. import all dependencies
const express = require("express")
const app = express()
const port = 8000
const { faker } = require('@faker-js/faker')

// 2. express config
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

// faker: create a user class
class User {
    constructor() {
        this._id = faker.random.numeric()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.number()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.random.numeric()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// 3. routes
app.get("/api/users/new", (req,res) => {
    const user = new User()
    res.json(user)
})

app.get("/api/companies/new", (req,res) => {
    const company = new Company()
    res.json(company)
})
app.get("/api/user/company", (req,res) => {
    const user = new User()
    const company = new Company()
    res.json({user: user, company: company})
})



// 4. listen to port
app.listen( port , ()=> console.log(`listening on port: ${port}`))