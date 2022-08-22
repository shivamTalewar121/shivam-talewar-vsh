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
    },
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
    {
        id: 6,
        name: "Trisha Madan",
        username: "tm.66",
        email: "tmk12@google.com",
        phone: "1-123-2121-2155",
        website: "Trish.net",
        password: "trishaMadhu",
        ages: 25
    },
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
        if (user.username === "demon") {
            console.log(user.username);
        }
    })
}

function findSpecificStartChar(users, char) {
    let found = [];
    users.filter(user => {
        if (user.name.startsWith(char)) {
            // console.log(user.name);
            let obj = { name: user.name, age: user.ages }
            found.push(obj);
        }
    })
    return found;
}

function findSumAges(users) {
    let sum = 0;
    users.map(d => {
        sum += d.ages;
    })
    console.log(sum)
}

function findAll(users) {
    users.map(d => {
        console.log(d.name + " " + d.ages);
    })
}

function sumAgesStartingWithChar(users, char) {
    let foundNames = findSpecificStartChar(users, char);
    // console.log(foundNames);
    let sumAges = foundNames.reduce((acc, curr) => {
        acc += curr.age;
        return acc;
    }, 0)
    console.log(sumAges);
}

function Sorting(users, order) {
    if(order === "ASC") {
        console.log(users.sort());
    } else if(order === "DESC") {
        console.log(users.reverse())
    } else {
        console.log("Enter valid order ASC/DESC");
    }
}

function deleteRecord(users, index) {
    users.splice(index, 1);
    console.log(users);
}

function insertRecord(users, temp, index) {
const userLog = users.splice(index,0,temp);
console.log(users)
}
insertRecord(user,{name: 'Shivam', age: 20, email: "shivam@xyz.com"},1)