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

findAge(family).then(result => console.log(result)).catch(error => console.log(error))