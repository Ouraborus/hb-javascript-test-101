
function generateRandomNumber(){
    rgb = {
        r: Math.round(Math.random()*255),
        g: Math.round(Math.random()*255),
        b: Math.round(Math.random()*255)
    }
    return rgb;
}

function filterNegativeNumbers(params) {
    var result = [];

    for (let i = 0; i < params.length; i++) {
        if (params[i] >= 0) {
            result.push(params[i]);        
        }
    }

    return result;
    }

function functionalfilterNegativeNumbers(params) {
    return params.filter(element =>{ 
        return element>=0;
        });     
}

function mapNumbersIntoStrings(params) {
    var result = [];

    params.forEach(element => {
        result.push(element.toString());
    });
    return result;
}

function functionalmapNumbersIntoStrings(params) {
    return params.map(element =>{ 
        return element.toString();
        }); 
}

function printType(params) {
    console.log (typeof params);
}
function isPalindrome(params) {
    var result = params.split("").reverse().join("");
    return result === params;
}

class Person{
    constructor(name, age){   
        this.name = name;
        this.age = age;
    }
    get Age(){
        return this.age;
    }

    printName(){
        console.log(this.name);
    }
}

function printOutPersonAge(params){
    console.log(params.Age);
}





console.log(generateRandomNumber());
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));
printType('1');
console.log(isPalindrome("madam"));
const student = new Person('John', 25);
student.printName();
printOutPersonAge(student); // 25


console.log(functionalfilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalmapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

