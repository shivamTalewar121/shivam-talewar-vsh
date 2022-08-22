const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 },
    { name: "Shivam", age: 20 }
];

function findAge(family) {
    const ages = family.filter(user => {
        if (user.age > 20) {
            console.log(user.name)
        }
    })
}
// findAge(family)

function findSpecificStartChar(family, char) {
    const filteredArray = []
    const name = family.filter(user => {
        let fname = user.name.toLowerCase();
        if (fname.startsWith(char.toLowerCase())) {
            let obj = { name: user.name, age: user.age }
            filteredArray.push(obj)
        }
        // console.log(filteredArray)
    }
    )
    console.log(filteredArray)
}
findSpecificStartChar(family, 's')

function findSpecificEndChar(family, char){
    const filteredArray = [];
    let end = family.filter(user=>{
        if(user.name.toLowerCase().endsWith(char.toLowerCase())){
            let obj = {name: user.name, age: user.age}
            filteredArray.push(obj)
        }
    })
    console.log(filteredArray)
}
findSpecificEndChar(family,"nny")

function findAllNames(family){
    const allNames = family.map(user=>{
        console.log(user.name)
    })
}
findAllNames(family)

