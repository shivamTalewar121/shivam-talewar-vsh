const data = [
    { name: "Butters", age: 3, type: "dog" },
    { name: "Lizzy", age: 6, type: "dog" },
    { name: "Red", age: 1, type: "cat" },
    { name: "Joey", age: 50, type: "dog" }
]

const data1 = [
    { name: "Butters", age: 3, type: "cat" },
    { name: "Lizzy", age: 6, type: "cat" },
    { name: "Red", age: 1, type: "cat" },
    { name: "Joey", age: 3, type: "cat" }
]


// Question 1 

function findAllDogs(data) {
    let newData
    return new Promise((resolve, reject) => {
        if (data !== undefined) {
            newData = data.filter(user => user.type === "dog")
        }
        if (newData.length === 0) {
            reject("NO RECORDS FOUND")
        } else {
            resolve(newData)
        }
    })
}
// findAllDogs(data).then(result => console.log(result)).catch(error => console.log(error))




// Question 2

function findSpecificStartWith(data, char) {
    let newData
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            newData = data.filter(user => user.name.toLowerCase().startsWith(char.toLowerCase()))
            if (newData.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(newData)
            }
        }
    })
}

// findSpecificStartWith(data, "b").then(result => console.log(result)).catch(error => console.log(error))





// Question 3
function findSumAges(data) {
    let totalAge
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            totalAge = data.reduce((acc, val) => acc += val.age, 0)
            if (totalAge === 0) {
                reject("NO RECORDS AVAILABLE")
            } else {
                resolve(totalAge)
            }
        }
    })
}
// findSumAges(data).then(result => console.log(result)).catch(error => console.log(error))




// Question 4