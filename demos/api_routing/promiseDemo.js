const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );


const apiCall = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            reject ("in api call")
        },2000)
    }) 
}

// option 1: .then & .catch
apiCall()
    .then((response) => console.log(".then -->" + response))
    .catch((error) => console.log(".catch -->" + error))

// option 2: async()
const asyncFunc = async() => {
    console.log("start")
    const response = await apiCall()
}