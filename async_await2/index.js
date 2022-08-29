var data = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];




//Question 1

function findStartName(data, char) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            let newData = data.filter(user => user.name.toLowerCase().startsWith(char.toLowerCase()))
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

// Q1. Write a promise function to display all name starting with 'E'.
// funtion : findStartNames(data)
// Hint : Filter

async function namesStartingWith(dataAr, char) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (dataAr !== undefined) {
                res(dataAr.filter(data => data.name.toLowerCase().startsWith(char.toLowerCase())));
            } else {
                rej("No records Found");
            }
        }, 2000);
    })
}

// Q2. Write a promise function to display all name ending with 'E'.
// funtion : findEndNames(data)
// Hint : Filter

async function namesEndingWith(dataAr, char) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (dataAr !== undefined) {
                res(dataAr.filter(data => data.name.toLowerCase().endsWith(char.toLowerCase())));
            } else {
                rej("No records Found");
            }
        }, 4000)

    })
}

// findStartName(data, 'E').then(result => console.log(result)).catch(error => console.log(error))




// Question 2
function findEndNames(data, char) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            let newData = data.filter(user => user.name.toLowerCase().endsWith(char.toLowerCase()))
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
// findEndNames(data, 'E').then(result => console.log(result)).catch(error => console.log(error))






//Question 3

function findForce(data) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            let shootingScores = data.reduce((acc, val) => acc += val.shootingScore, 0);
            let pilotingScores = data.reduce((acc, val) => acc += val.pilotingScore, 0);
            if (pilotingScores <= 0 && shootingScores <= 0) {
                reject("NO RECORDS")
            } else {
                let total = shootingScores + pilotingScores;
                resolve(`the total of shooting and piloting scores is ${total}`);
            }
        } else {
            reject("NO RECORDS FOUND")
        }
    })
}
// findForce(data).then(result => console.log(result)).catch(error => console.log(error))




// Question 4

function forceTotal(data) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            let newData = data.filter(user => user.isForceUser === true).reduce((acc, val) => val = acc + val.pilotingScore + val.shootingScore, 0);
            if (newData === 0) {
                reject("NO RECORDS")
            } else {
                resolve(newData)
            }
        } else {
            reject("NO RECORDS FOUND")
        }
    })
}
// forceTotal(data).then(result => console.log(result)).catch(error => console.log(error))





// Question 5

function findForceTotal(data) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length !== 0) {
            let newData = data.filter(user => user.isForceUser === true).map(user => {
                if (user.pilotingScore) {
                    return { pilotingScore: user.pilotingScore * 6, shootingScore: user.shootingScore }
                }
            }).reduce((acc, val) => val = acc + val.pilotingScore + val.shootingScore, 0)
            if (newData === 0) {
                reject("NO RECORDS")
            } else {
                resolve(newData)
            }
        }
    })
}
// findForceTotal(data).then(result => console.log(result)).catch(error => console.log(error))





//Question 6

async function findAll(data, char) {
    try {
        let que1 = await findStartName(data, char)
        console.log(que1);
        let que2 = await findEndNames(data, char)
        console.log(que2);
        let que3 = await findForce(data)
        console.log(que3);
        let que4 = await findForceTotal(data)
        console.log(que4)
    } catch (error) {
        console.log(error)
    }
}
// findAll(data, "E")





// Question 7

async function findAllTotal(data, char) {
    try {
        let que1 = await findStartName(data, char);
        console.log(que1)
        let total = await findForce(que1)
        console.log(total)
    } catch (error) {
        console.log(error)
    }
}
// findAllTotal(data, 'e')




//Question 8

function nestedPromises(data, char) {
    return new Promise((resolve, reject) => {
        if (data !== undefined || data.length === 0) {
            findStartName(data, char).then(result => findForce(result)
                .then(res => {
                    if (res <= 0) {
                        reject("NO RECORDS")
                    } else {
                        resolve(res)
                    }
                }).catch(error => console.log(error))
            ).catch(error => console.log(error))
        } else {
            reject("PLEASE ENTER CORRECT DATA")
        }
    })
}
// nestedPromises(data, 'e').then(result=>console.log(result)).catch(error=>console.log(error))



//Question 9

async function allShootingUser(data) {
    let newData
    if (data !== undefined && data.length !== 0) {
        newData = await data.filter(user => user.isForceUser === true).map(result => {
            if (result.shootingScore > 10) {
                return result.name
            }
        })
    }
    console.log(newData)
}
// allShootingUser(data)



// Question 10

// Promise.all([findStartName(data, 'e'), findEndNames(data, "e"), findForce(data)]).then(result => console.log(result)).catch(error => console.log(error))



//Question 11

// const racePromises = [namesStartingWith(data, "z"), namesEndingWith(data, "r")];
// Promise.race(racePromises).then(res => console.log(res)).catch(err => console.log(err));



// Q12. Write a promise function to perform sorting on shooting in ascending order.

const sortShooting = async (dataAr) => {
    return new Promise((res, rej) => {
        if (dataAr !== undefined) {
            res(dataAr.sort((a, b) => {
                return a.shootingScore - b.shootingScore;
            }))
        } else {
            rej("No records Found")
        }
    })
}

sortShooting(data).then(res => console.log(res)).catch(err => console.log(err));
