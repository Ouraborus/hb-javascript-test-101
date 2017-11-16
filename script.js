
export function generateRandomNumber(){
    var rgb = {
        r: Math.round(Math.random()*255),
        g: Math.round(Math.random()*255),
        b: Math.round(Math.random()*255)
    }
    return rgb;
}

export function filterNegativeNumbers(params) {
    var result = [];

    for (let i = 0; i < params.length; i++) {
        if (params[i] >= 0) {
            result.push(params[i]);        
        }
    }

    return result;
    }

export function functionalFilterNegativeNumbers(params) {
    return params.filter(element =>{ 
        return element>=0;
        });     
}

export function mapNumbersIntoStrings(params) {
    var result = [];

    params.forEach(element => {
        result.push(element.toString());
    });
    return result;
}

export function functionalMapNumbersIntoStrings(params) {
    return params.map(element =>{ 
        return element.toString();
        }); 
}

export function printType(params) {
    console.log (typeof params);
}

export function isPalindrome(params) {
    var result = params.split("").reverse().join("");
    return result === params;
}

export class Person{
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

export function printOutPersonAge(params){
    console.log(params.Age);
}
