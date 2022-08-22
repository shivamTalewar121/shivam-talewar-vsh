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
                name: "cappy",
                age: 15
            },
            {
                species: "dog"
            }
        ]
    }
];

function personNames(persons) {
    const names = persons.filter(person => {
        console.log(person.name)
    })
}
personNames(persons)

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
animalsName(persons)

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
countOfAnimals(persons)


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
dogPerson(persons)

