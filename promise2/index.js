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

function findAll(data) {
    let newData = []
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            data.map(user => {
                newData.push({ name: user.name, age: user.age })
            })
            if (newData.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(newData)
            }
        } else {
            reject("NO RECORDS FOUND")
        }
    })
}
// findAll(data).then(result => console.log(result)).catch(error => console.log(error))





// Question 5

function allDogOwnerAge(data) {
    return new Promise((resolve, reject) => {
        findAllDogs(data).then(result => findSumAges(result).then(result => {
            if (result < 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(result)
            }
        }).catch(error => console.log(error))).catch(error => console.log(error))
    })
}
// allDogOwnerAge(data).then(result => console.log(`total of all ages of dog owners is ${result}`)).catch(error => console.log(error))





// Question 6

function sortingData(data, order) {
    return new Promise((res, rej) => {
        if (data !== undefined) {
            if (order.toUpperCase() === "ASC") {
                res(data.sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }))
            } else if (order.toUpperCase() === "DSC") {
                res(data.sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                }))

            } else {
                rej("Check Argument")
            }
        }
    })
}

sortingData(data, "asc").then(result => console.log(result)).catch(error => console.log(error))