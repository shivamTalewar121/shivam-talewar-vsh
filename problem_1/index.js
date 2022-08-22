const user = [
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
]

const newUsers = [
    {
        id: 4,
        name: "Nishu Kash",
        username: "nk.4",
        email: "nk4@google.com",
        phone: "1-212-12323-212",
        website: "nk.net",
        password: "nishuk121212",
        ages: 26
    },
    {
        id: 5,
        name: "Taru Nag",
        username: "tn.4",
        email: "tn5@google.com",
        phone: "1-542-1221-1212",
        website: "tn.net",
        password: "tarunag1231",
        ages: 20
    },
]

function addLast(users, temp) {
    temp = [...users, ...newUsers];
    console.log(temp);
}

addLast(user);

function addFirst(users, temp) {
    temp = [...newUsers, ...users];
    console.log(temp);
}

function display(users) {
    users.map(user => {
        console.log("id: " + user.id, "name: " + user.name, "username: " + user.username);
    })
}

function findNameEquals(users) {
    users.filter(user => {
        if(user.username === "demon"){
            console.log(user.username);
        }
    })
}

function findSpecificStartChar(users, )

console.log("Adding at last not mutating the original array")
addLast(user);

console.log("Adding at first not mutating the original array")
addFirst(user);

console.log("display id, name and username")
display(user)

findNameEquals(user);