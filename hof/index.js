// data
var grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

// Q1 Write a HOF function to display average of all students.
//     Hint : average(grades)('grade')
// o / p :
// Average of All Students 10.2

function average(grades) {
    return function score(char) {
        if (char === "grade") {
            if (grades !== undefined) {
                let totalScore = grades.reduce((acc, val) => val = acc + val.grade, 0)
                let length = grades.length
                let avgScore = totalScore / length
                console.log(`average of all students ${char} is ${avgScore}`)
            } else {
                console.log("records are empty")
            }
        } else {
            console.log("please enter valid argument")
        }
    }
}
// average(grades)("grade")





// Q2: Write a HOF function to display List of Boys.
// Hint : getGender(grades)('sex')('M')
// o/p:
// List of Boys 
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Bob', grade: 16, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' },
//   { name: 'Ethan', grade: 4, sex: 'M' },
//   { name: 'Donald', grade: 5, sex: 'M' } ]


function getGender(grades) {
    return function sex(char) {
        if (char.toLowerCase() === 'sex') {
            return function gender(init) {
                if (init.toUpperCase() === "M") {
                    let all = grades.filter(user => user.sex === "M")
                    console.log(all)
                    return all
                } else if (init.toUpperCase() === "F") {
                    all = grades.filter(user => user.sex === "F")
                    console.log(all)
                    return all
                } else {
                    console.log("please enter valid gender")
                    return undefined;
                }
            }
        } else {
            console.log("please enter valid argument")
        }
    }
}
// getGender(grades)('sex')('m')





// Q3: Write a HOF function to display Average  grade of Boys
// Hint : average(getGender(grades)('sex')('M'))('grade')
// o/p:
// Average grade of Boys - 7

// average(getGender(grades)('sex')('m'))('grade')







// Q4: Write a HOF function to display List of Girls.
// Hint : getGender(grades)('sex')('F')
// o/p:
// List of Girls
// [ { name: 'Sarah', grade: 12, sex: 'F' },
//   { name: 'Paula', grade: 18, sex: 'F' },
//   { name: 'Jennifer', grade: 13, sex: 'F' },
//   { name: 'Courtney', grade: 15, sex: 'F' },
//   { name: 'Jane', grade: 9, sex: 'F' } ]

// getGender(grades)('sex')('f')






// Q5:  Write a HOF function to display Average  grade of Girls
// o/p:
// Average grade of Girls - 13.4

// average(getGender(grades)('sex')('f'))('grade')






// Q6 : Write a HOf function which will check from an object weather gender is M or F it return either true or false.
// Hint :  isGender(property)(genderType)(object) 
//           eg:  isGender('sex')('M')(obj) 
//           obj = { name: 'John', grade: 8, sex: 'M' } o/p : true

function isGender(property) {
    if (property.toLowerCase() === 'sex') {
        return function gender(char) {
            return function isTure(obj) {
                if (obj.sex.toLowerCase() === char.toLowerCase()) {
                    console.log(true)
                    console.log(`entered gender ${char} matches to the object gender ${obj.sex}`)
                } else {
                    console.log(false)
                    console.log(`entered gender does not matches to the objects gender`)
                }
            }
        }
    } else {
        console.log("please enter valid property")
    }
}
// isGender('sex')('f')(grades[1])






// Q7 : Write a HOf function which will check from an object weather name starts v l4rlowith 'J' or not. It will check from an object weather /

// Hint :  isGender(property)(genderType)(object) 
//           eg:  isGender('sex')('J')(obj) 
//           obj = { name: 'John', grade: 8, sex: 'M' } // true

function isName(property) {
    if (property.toLowerCase() === 'sex') {
        return function genderType(char) {
            return function name(obj) {
                if (obj.name.toLowerCase().startsWith(char.toLowerCase())) {
                    console.log(obj)
                    console.log(`${true} the name starts with ${char}`)
                } else {
                    console.log(obj)
                    console.log(`${false} the name does not starts with ${char}`)
                }
            }
        }
    } else {
        console.log('please enter the correct property')
    }
}
// isName('sex')('J')(grades[0])







// Q8 :  Write a HOF function to display List of all students starting with J "
// Hint : getSpecific(grades)('name')('J')
// o/p
// List of all students starting with J 
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' },
//   { name: 'Jennifer', grade: 13, sex: 'F' },
//   { name: 'Jane', grade: 9, sex: 'F' } ]

function getSpecific(grades) {
    return function nameStarts(property) {
        if (property.toLowerCase() === "name") {
            return function names(char) {
                if (char.toUpperCase() === "J") {
                    let users = grades.filter(user => user.name.toLowerCase().startsWith(char.toLowerCase()))
                    console.log(users)
                } else {
                    console.log("Enter 'J' to see records")
                }
            }
        } else {
            console.log("Please enter the correct property")
        }
    }
}
// getSpecific(grades)('name')('J')





// Q9 :Write a HOF function to display List of all students starting with J and gender is M
// o/p
// List of all students starting with J and gender is M 
// [ { name: 'John', grade: 8, sex: 'M' },
//   { name: 'Johnny', grade: 2, sex: 'M' } ] 

function nameStarts(grades) {
    return function getSpecific(property) {
        if (property.toLowerCase() === "name") {
            return function names(char) {
                if (char.toUpperCase() === "J") {
                    return function user(init) {
                        if (init.toUpperCase() === "M") {
                            let users = grades.filter(result => result.name.toLowerCase().startsWith(char.toLowerCase()))
                            users = users.filter(result => result.sex === "M")
                            let average = users.reduce((acc, val) => acc += val.grade, 0)
                            console.log(users)
                            console.log(`average of all students name starting with J and sex M is${average / users.length}`)
                        } else if (init.toUpperCase() === "F") {
                            users = grades.filter(result => result.name.toLowerCase().startsWith(char.toLowerCase()))
                            users = users.filter(result => result.sex === "F")
                            console.log(users)
                        }
                    }
                }
            }
        }
    }
}

// nameStarts(grades)("name")("J")("M")





// Q10. Write a HOF function to find average of  List of all students starting with J and gender is M
// o/p
// Average of all students starting with J and gender is M 
// 5

// nameStarts(grades)("name")("J")("M")





// Q11. Write a HOF function to find student name having highest grade
// Hint : sorting on object by 'grade' property.
// Hint : sorting on object by 'grade' property ASC and DESC
//          grades.sort(sortBy('grade')('ASC')
//          getName('name')(grades.sort(sortBy('grade')('ASC'))[0])

// o/p : Lowest Grade Student  Johnny

function sorting(grades) {
    let user
    return function sortBy(init) {
        if (init.toUpperCase() === "GRADE") {
            return function sorting(char) {
                if (char.toUpperCase() === "ASC") {
                    return user = grades.sort((a, b) => a.grade - b.grade)
                    // console.log(user)
                    console.log(`the person with highest grade is ${user[user.length - 1].name}`)
                    console.log(`the person with lowest grade is ${user[0].name}`)
                } else if (char.toUpperCase() === "DSC") {
                    return user = grades.sort((a, b) => b.grade - a.grade)
                    // console.log(user)
                    console.log(`the person with highest grade is ${user[0].name}`)
                    console.log(`the person with lowest grade is ${user[user.length - 1].name}`)
                } else {
                    console.log("Please Enter correct order for sorting")
                }
            }
        } else {
            console.log("please enter 'grade' to see the sorting")
        }
    }
}

function getName(name) {
    if(name.toLowerCase()==="name"){
    return function sortedArray(list) {
    let lowestPerson = list[0]
    return lowestPerson
    }
}else{
    console.log("please provide valid argument")
}
}
// getName('name')(sorting(grades)('grade')('asc'))
// console.log(`lowest grade student ${getName('name')(sorting(grades)('grade')('asc')).name}`)




// Q12. Write a HOF function to find student name having Lowest grade
// Hint : sorting on object by 'grade' property ASC and DESC
//          grades.sort(sortBy('grade')('ASC')
//          getName('name')(grades.sort(sortBy('grade')('ASC'))[0])
// o/p : Higest Grade Student  Paula

function highestGradeStudent(person){
    console.log(`highest grade student ${person.name}`)
}
// highestGradeStudent(getName('name')(sorting(grades)('grade')('dsc')))






// Q13: Write a HOF function to find student name and grade having highest grade.
// o/p : { name:'Paul',grade:18}

function highGrade(person){
    console.log({name:person.name, grade: person.grade})
}
// highGrade(getName('name')(sorting(grades)('grade')('dsc')))




// Q14: Write a HOF function to find student name and grade having Lowest grade.
// o/p : { name:'Johnny',grade:2}

function lowestGrade(person){
    console.log({name: person.name, grade: person.grade})
}
// lowestGrade(getName('name')(sorting(grades)('grade')('asc')))




// Q15: Write a HOF function to find student object having highest grade.
// o/p : 
// {name: 'Paula', grade: 18, sex: 'F'},

function topGrade(person){
    console.log(person)
}
// topGrade(getName('name')(sorting(grades)('grade')('dsc')))





// Q16: Write a HOF function to find student object having Lowest grade.
// o/p : 
// {name: 'Johnny', grade: 2, sex: 'M'},


function lowGrade(person){
    console.log(person)
}
lowGrade(getName('name')(sorting(grades)('grade')('asc')))