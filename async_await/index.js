data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];




// Question 1

async function findDogs(data) {
    let newData = await data.filter(result => result.type === "dog");
    // console.log(newData)
    setTimeout(() => newData, 10)
}
// findDogs(data)




//Question 2

async function findSpecific(data, char) {
    let newData = await data.filter(user => user.name.toLowerCase().startsWith(char.toLowerCase()));
    console.log(...newData)
    setTimeout(() => newData, 50)
}
// findSpecific(data, 'b')






//Question 3

async function findAges(data) {
    let totalAge = await data.reduce((acc, val) => val = acc + val.age, 0)
    console.log(`the total of all the ages is ${totalAge}`)
    return totalAge
}
// findAges(data)





//Question 4

async function findTotal(data) {
    let specificUser = await findDogs(data);
    let totalOfAges = await specificUser.filter(user => user.age > 3).reduce((acc, val) => acc += val.age, 0);
    console.log(`the total of age is ${totalOfAges}`)
}
// findTotal(data)




// Question 5

async function findAll(data, char) {
    let que1 = await findDogs(data);
    let que2 = await findSpecific(data, char);
    let que3 = await findAges(data);
    let que4 = await findTotal(data)
}
// findAll(data,'b')



//Question 6

async function nestedAsync(data) {
    let newData = await findDogs(data);
    let ages = await findAges(newData)
}
// nestedAsync(data)




// Question 7

function newPromise(data) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            findDogs(data).then(result => findAges(result)
                .then(res => {
                    if (res !== 0) {
                        resolve(res)
                    } else {
                        reject("NO RECORD FOUND")
                    }
                }
                )).catch(error => console.log(error))
        }
    })
}
// newPromise(data).then(result => console.log(result)).catch(error => console.log(error))




//Question 8
async function promiseAll(data,char) {
    return Promise.all([findDogs(data), findAges(data), findSpecific(data,char)])
}
// promiseAll(data, "B");



//Question 9
Promise.race([findDogs(data), findSpecific(data, 'b')]).then(result=>console.log(result)).catch(error=>console.log(error))