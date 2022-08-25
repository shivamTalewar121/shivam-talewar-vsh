const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
];


//Question 1

function findAge(family) {
    let newData
    return new Promise((resolve, reject) => {
        if (family !== undefined) {
            newData = family.filter(user => user.age > 26)
        }
        if (newData.length === 0) {
            reject("NO RECORDS FOUND")
        } else {
            resolve(newData)
        }
    })
}

// findAge(family).then(result => console.log(result)).catch(error => console.log(error))



//Question 2

function findSpecificStartChar(family, char) {
    let newData
    return new Promise((resolve, reject) => {
        if (family !== undefined || family.length !== 0) {
            newData = family.filter(user => user.name.toLowerCase().startsWith(char.toLowerCase()))
            if (newData.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(newData)
            }
        }
    })
}
// findSpecificStartChar(family, 'j').then(result => console.log(result)).catch(error => console.log(error))




//Question 3

function findSpecificEndChar(family, char) {
    let newData
    return new Promise((resolve, reject) => {
        if (family !== undefined || family.length !== 0) {
            newData = family.filter(user => user.name.toLowerCase().endsWith(char.toLowerCase()))
            if (newData.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(newData)
            }
        }
    })
}
// findSpecificEndChar(family, 'nny').then(result => console.log(result)).catch(error => console.log(error))







// Question 4

function findAllNames(family) {
    let newData
    return new Promise((resolve, reject) => {
        if (family !== undefined || family.length !== 0) {
            newData = family.map(user => user)
            if (newData.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(newData)
            }
        } else{
            reject("NO RECORDS FOUND")
        }
    })
}
// findAllNames(family).then(result => console.log(result)).catch(error => console.log(error))





//Question 5

function sorting(family, order) {
    return new Promise((resolve, reject) => {
        if (family !== undefined) {
            if (order.toUpperCase() === "ASC") {
                resolve(family.sort((a, b) => {
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
                resolve(family.sort((a, b) => {
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
                reject("Check Argument")
            }
        }
    })
}

sorting(family, "dsc").then(result => console.log(result)).catch(error => console.log(error))