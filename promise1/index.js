
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
        name: "Dean John",
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


