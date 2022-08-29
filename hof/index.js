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

function average(grades){
    return function score(char){
        if(char==="grade"){
            if(grades!==undefined){
        let totalScore=grades.reduce((acc, val)=>val = acc+val.grade,0)
        let length = grades.length
        let avgScore = totalScore/length
        console.log(`average of all students ${char} is ${avgScore}`)
    }else{
        console.log("records are empty")
    }
    }else {
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


function getGender(grades){
    return function sex(char){
        if(char.toLowerCase()==='sex'){
            return function gender(init){
                if(init.toUpperCase()==="M"){
                    let all = grades.filter(user=>user.sex==="M")
                    console.log(all)
                    return all
                }else if(init.toUpperCase()==="F"){
                    all=grades.filter(user=>user.sex==="F")
                    console.log(all)
                    return all
                }else{
                    console.log("please enter valid gender")
                    return undefined;
                }
            }
        }else{
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

function isGender(property){
    if(property.toLowerCase()==='sex'){
        return function gender(char){
            return function isTure(obj){
                if(obj.sex.toLowerCase()===char.toLowerCase()){
                    console.log(true)
                    console.log(`entered gender ${char} matches to the object gender ${obj.sex}`)
                }else{
                    console.log(false)
                    console.log(`entered gender does not matches to the objects gender`)
                }
            }
        }
    }else{
        console.log("please enter valid property")
    }
}
// isGender('sex')('f')(grades[1])






// Q7 : Write a HOf function which will check from an object weather name starts v l4rlowith 'J' or not. It will check from an object weather /

// Hint :  isGender(property)(genderType)(object) 
//           eg:  isGender('sex')('J')(obj) 
//           obj = { name: 'John', grade: 8, sex: 'M' } // true

function isName(property){
    if(property.toLowerCase()==='sex'){
    return function genderType(char){
        return function name(obj){
            if(obj.name.toLowerCase().startsWith(char.toLowerCase())){
                console.log(obj)
                console.log(`${true} the name starts with ${char}`)
            }else{
                console.log(obj)
                console.log(`${false} the name does not starts with ${char}`)
            }
        }
    }
}else{
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

function getSpecific(grades){
    return function nameStarts(char){

    }
}