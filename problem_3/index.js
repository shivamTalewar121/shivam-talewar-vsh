const persons = [
    {
        name: "Joe",

        animals: [
            {
                species: "dog",
                name: "Bolt",
                age: 23

            },
            {
                species: "cat",
                name: "Billy",
                age: 24
            },

        ]
    },
    {
        name: "Bob",
        animals: [
            {
                species: "dog",
                name: "Snoopy",
                age: 20
            }
        ]
    },

    {
        name: "Slobby",
        animals: [
            {
                species: "cat",
                name: "Snoopy",
                age: 15
            },
            {
                species: "turtle",
                name: "cappy",
                age: 15
            },
            {
                species: "dog",
                name: "cappy",
                age: 10
            }

        ]
    },
    {
        name: "Shivam",
        animals: [
            {
                species: "cat",
                name: "Snoopy",
                age: 15
            },
            {
                species: "turtle",
                name: "cap",
                age: 15
            },
            {
                species: "turtle",
                name: "sparky",
                age: 10
            }
        ]
    }
];

function personNames(persons) {
    const names = persons.filter(person => {
        console.log(person.name)
    })
}
// personNames(persons)

function animalsName(persons) {
    const allAnimals = []
    const animalNames = persons.filter(person => {
        let all = person.animals;
        all.filter(animal => {
            allAnimals.push(animal.name)
            console.log("animals name=>", animal.name)
        })
    })
    console.log(allAnimals)
}
// animalsName(persons)

function countOfAnimals(persons) {
    let count = 0;
    persons.map(user => {
        if (user.animals !== undefined) {
            user.animals.map(animal => {
                if (animal !== undefined) {
                    count++
                }
            })
        }
    })
    console.log(count)
}
// countOfAnimals(persons)


function dogPerson(persons) {
    persons.map((person, idx) => {
        let animal = person.animals
        let name = person.name
        animal.map((user, idx) => {
            if (user.species == 'dog') {
                console.log(name)
            }
        })
    })
}
// dogPerson(persons)


function dogAndTurtlePerson(persons) {
    let currentPerson = ""
    persons.map(person => {
        currentPerson = person.name;
        let hasDog = false;
        let hasTurtle = false;
        if (person.animals !== undefined) {
            person.animals.map(animal => {
                if (animal.species === "dog") {
                    hasDog = true;
                } if (animal.species === "turtle") {
                    hasTurtle = true;
                }
                if (hasDog && hasTurtle) {
                    console.log(`${currentPerson} has both dog and turtle`)
                }
            })
        }
    })
}

//dogAndTurtlePerson(persons)

function hasDog(persons) {
    let arrayDog = []
    persons.map(person => {
        let haveDog = false
        if (person.animals !== undefined) {
            person.animals.map(animal => {
                if (animal.species === "dog") {
                    haveDog = true
                }
            })
            arrayDog.push(haveDog)
        }
    })
    if (arrayDog.includes(false)) {
        console.log("not all have dogs")
    } else {
        console.log("all have dogs")
    }
}

// hasDog(persons)

function hasTurtle(persons) {
    let turtleArray = []
    let haveTurtle = false
    persons.map(person => {
        if (person.animals !== undefined) {
            person.animals.map(animal => {
                if (animal.species === "turtle") {
                    haveTurtle = true
                    if (haveTurtle === true) {
                        turtleArray.push(animal.name)
                    }
                }
            })
        }
    })
    console.log(turtleArray)
}

// hasTurtle(persons)

function totalCountOfAnimals(persons) {
    persons.map((person, idx) => {
        console.log(persons[idx].name, persons[idx].animals.length)
    })
}

// totalCountOfAnimals(persons)


function listOfAllAnimals(persons) {
    persons.map(person => {
        person.animals.map(animal => {
            console.log(animal)
        })
    })
}
// listOfAllAnimals(persons)

function listOfDogs(persons) {
    let allDogs = []
    persons.map(person => {
        person.animals.map(animal => {
            if (animal.species === "dog") {
                allDogs.push({ species: animal.species, name: animal.name, age: animal.age })
            }
        })
    })
    console.log(...allDogs)
}
// listOfDogs(persons)

function countOfDogs(persons) {
    let count = 0
    persons.filter(person => {
        if (person.animals !== undefined) {
            person.animals.map(animal => {
                if (animal.species === "dog") {
                    count++
                }
            })
        }
    })
    console.log(`persons array have ${count} dogs`)
}
// countOfDogs(persons)

function ownerOfThree(persons) {
    let currentPerson = "";
    let hasDog = false;
    let hasTurtle = false;
    let hasCat = false;
    persons.map(person => {
        if (person.animals.length >= 3) {
            currentPerson = person.name
            person.animals.map(animal => {
                if (animal.species === 'dog') {
                    hasDog = true
                }
                if (animal.species === 'turtle') {
                    hasTurtle = true;
                }
                if (animal.species === 'cat') {
                    hasCat = true;
                }
            })
        }
        if (hasDog && hasTurtle && hasCat)
            console.log(currentPerson)
    })
}
ownerOfThree(persons)