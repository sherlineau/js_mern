// --------- callback functions -------------------
const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged $${price}`)
}

const returningItem =  (person, price) => {
    console.log(`Processing purchase for ${person}, $${price} will be issued to ${person}'s bank account`)
}

const parentFunction = (callback, person, price) => {
    //callback:function
    //functions are basically being made into a variable, so when I call the parent function i can use use the functions name as a parameter in the callback function
    console.log("Welcome to the store")
    callback(person,price)
}

parentFunction(makingPurchase, "Christian", 1000)
parentFunction(returningItem, "Max", 40)


// similar to nested functions
const parentCurrying = (callback) =>
{
    console.log("Welcome to the currying store")
    return (person,price) => {
        callback(person,price)
    }
}

parentCurrying(makingPurchase)("Heidi",10)


// Object.freeze() 
//can not adjust a frozen object
const shoppingList = Object.freeze([
    {id: 3, itemName: 'wetfood', price: 1.29, shops:['petco','Trader Joes']},
    {id: 5, itemName: 'red gamer chair', price: 300, shops:['amazon','Best Buy']},
    {id: 9, itemName: 'soup dumplings', price: 3.29, shops:['Trader Joes']},
    {id: 2, itemName: 'ticket to japan', price: 1400, shops:['expedia']},
] )

// ---------- .map and .filter ---------------

//      .map() function
//function is a function that takes in a callback function
const prices = shoppingList.map((item)=>{
    //not including return will result in a array of undefined values
    return item.price
})

// 1. loops through each element inside the array
// 2. grabs the returned data ( item.price )
// 3. Make an array using the above returned data

// short hand/ no curlys & return statement
const prices2 = shoppingList.map((item,i)=>`${i}: ${item.price}`)


// not recommended for map
const prices3 = shoppingList.map(function(item){
    return item.price
})

console.log(prices)
console.log(prices2)
console.log(prices3)

// return a list of item names
const itemNames = shoppingList.map((element)=>element.itemName)
console.log(itemNames)

//      .filter() 
// return list of cheap items ( cheap price < 100)
// map can be chained after filter to just get the certain thing
// filter returns the whole thing, map returns what we ask for
const cheapItems = shoppingList.filter((item)=>item.price<100).map((item)=>item.itemName)
console.log(cheapItems)
// 1. loop through each element inside of array
// 2. returns element if condition is true: [element's price<100]

// given a deleteID, return a list of items without the item of that matching id
const deleteId = 2
const deletedList = shoppingList.filter((item)=>item.id!==deleteId)
console.log(deletedList)

//  given an array index, return a list of items without the item of that index
const deletePos = 0
const deletePosList = shoppingList.filter((item, i) => i !== deletePos)
console.log(deletePosList)

// TODO filter the itmes that can be bought in Trader Joes
// HINT: .includes(keyword) returns boolean
const traderJoesItems = shoppingList.filter((item) => item.shops.includes('Trader Joes'))
console.log(traderJoesItems)

// concat, spread
// concat adds arrays together
// different methods to add to an array instead of push
const addTV = shoppingList.concat([{itemName:"TV", price: 1299, shop:['BestBuy']}])
console.log(addTV)

const addGame = [...shoppingList, {itemName:"gow", price: 49.99, shop:['BestBuy', 'Target']} ]
console.log(addGame)

// get first two 2 items
const firstTwoItems = [...shoppingList.slice(0,2)]
console.log(firstTwoItems)

// can i use slick to exclude position 3?
const removePos3 = [...shoppingList.slice(0,3), ...shoppingList.slice(4,5)]
console.log(removePos3)

// splice vs slice
// splice DELETES from array
// slice only returns a copy of the section you "sliced"
const array = [1,2,3,4,5]
console.log(array.splice(1,2))
console.log(array)

const arr2 = [1,2,3,4,5]
console.log(arr2.slice(1,2))
console.log(arr2)


// -------sorting----------
console.log(cheapItems)
const sortedItemNames = cheapItems.sort()
console.log(sortedItemNames)

console.log(prices)
const sortedPrices = prices.sort((a,b) => a-b)
console.log(sortedPrices)

//make shoppinglist into an array and sort that by the itemName
const sortByName = [...shoppingList].sort((a,b)=> a.itemName > b.itemName ? 1: -1)
console.log(sortByName)

