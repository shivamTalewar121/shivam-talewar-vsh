
const users = [
    {
        id: 2,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password",
        ages: 34
    },
    {
        id: 3,
        name: "Bean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        ages: 23
    },
    {
        id: 3,
        name: "Demon John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        ages: 23
    }
];



//Question 1

function addLast(user, temp) {
    return new Promise((resolve, reject) => {
        let newUser;
        if (temp) {
            newUser = [...user, ...temp]
            resolve(newUser);
        } else {
            reject(() => console.log("an error occured"))
        }
    })
}

let temp = [{
    id: 4,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34
},
{
    id: 5,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23
}]

// addLast(users, temp).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })



//Question 2

function addFirst(users, temp) {
    return new Promise((resolve, reject) => {
        let newUser;
        if (temp) {
            newUser = [...temp, ...users]
            resolve(newUser);
        } else {
            reject(() => console.log("an error occured"))
        }
    })
}

let firstUsers = [
    {
        id: 0,
        name: "Nitin Gajpaiye",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password",
        ages: 34
    },
    {
        id: 1,
        name: "Neeraj Borade",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        ages: 23
    }
]

// addFirst(users, firstUsers).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })




// Question 3

function displayName(users) {
    return new Promise((resolve, reject) => {
        if (users !== undefined || users !== []) {
            let list = users.map(user => {
                return { name: user.name, id: user.id, username: user.username }
            })
            resolve(list)
        } else {
            reject(() => console.log("no user is present"))
        }
    })
}

// displayName(users).then(result => {
//     console.log(...result)
// }).catch(error => console.log(error))



//Question 4

function findNameEquals(users) {
    let list;
    return new Promise((resolve, reject) => {
        if (users !== undefined) {
            list = users.filter((user) => user.name.toLowerCase().includes('demon'))
            if (list.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(list)
            }
        } else {
            reject("NO RECORDS FOUND")
        }
    })
}

// findNameEquals(users).then(result => console.log(result)).catch(error => console.log(error))



//Question 5

function findSpecificStartChar(users, char) {
    let user
    return new Promise((resolve, reject) => {
        if (users !== undefined) {
            user = users.filter(result => result.name.toLowerCase().startsWith(char.toLowerCase()))
            if (user.length === 0) {
                reject("NO RECORDS FOUND")
            } else {
                resolve(user)
            }
        } else {
            reject("NO RECORDS FOUND")
        }
    })
}

// findSpecificStartChar(users, "D").then((result) => {
//     console.log(result)
// }).catch(error => console.log(error))




//Question 6

function findSumAges(users) {
    let totalAge
    return new Promise((resolve, reject) => {
        if (users !== undefined) {
            totalAge = users.filter(user => {
                return user.ages !== undefined && user.ages > 0
            }).reduce((acc, val) => acc += val.ages, 0)
        }
        if (totalAge !== 0 && totalAge > 0) {
            resolve(totalAge)
        } else {
            reject("NO RECORD FOUND")
        }
    })
}

// findSumAges(users).then(result => console.log(`Total of all the ages of persons in the record is ${result}`)).catch(error => console.log(error))




//Question 7

function findAllUsers(users) {
    let userNew = []
    return new Promise((resolve, reject) => {
        if (users !== undefined) {
            users.map(user => userNew.push({ name: user.name, age: user.ages }))
            if (userNew.length !== 0) {
                resolve(userNew)
            }
            else {
                reject("NO RECORDS FOUND")
            }
        }
    })
}
// findAllUsers(users).then(resolve => console.log(resolve)).catch(error => error)



//Question 8

function findNameAges(users, char) {
    return new Promise((resolve, reject) => {
        if (users !== undefined) {
            resolve(
                findSpecificStartChar(users, char).then(res => findSumAges(res).then(result => {
                    console.log(`the total of age whose name starts with B is ${result}`)
                }).catch(error => console.log(error))).catch(error => console.log(error))
            )
        }
        reject("NO RECORDS FOUND")
    })
}

// findNameAges(users, "B").then(res => console.log(res)).catch(error => error)



//Question 9

function sortingData(usersAr, order) {
    return new Promise((res, rej) => {
        if (usersAr !== undefined) {
            if (order.toUpperCase() === "ASC") {
                res(usersAr.sort((a, b) => {
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
                res(usersAr.sort((a, b) => {
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

sortingData(users, "asc").then(result => console.log(result)).catch(error => console.log(error))