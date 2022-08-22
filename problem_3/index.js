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
            console.log("animals name=>",animal.name)
        })
    })
    console.log(allAnimals)
}
animalsName(persons)