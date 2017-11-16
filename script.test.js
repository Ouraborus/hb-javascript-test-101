import {
    generateRandomNumber,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from "./script.js";

describe('generateRandomNumber', ()=>{
    var rgb = generateRandomNumber();
    test('Should be a JSON object with 3 values', () => {
        expect(rgb).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }))
    });
    test('Should contain 3 values less than 255 and greater than 0', () => {
        expect(rgb.r).toBeGreaterThanOrEqual(0);
        expect(rgb.g).toBeGreaterThanOrEqual(0);
        expect(rgb.b).toBeGreaterThanOrEqual(0);        
        expect(rgb.r).toBeLessThanOrEqual(255);
        expect(rgb.g).toBeLessThanOrEqual(255);
        expect(rgb.b).toBeLessThanOrEqual(255);
    });
});

describe('filterNegativeNumbers',() =>{
    var testArray = [-4,-8,-10,0,12,15,20];
    var positiveArray = filterNegativeNumbers(testArray);
    var functionalPositiveArray = functionalFilterNegativeNumbers(testArray);
    
    validateArray(positiveArray);
    validateArray(functionalPositiveArray);

    test('Should return positive numbers',() => {
        positiveArray.forEach(element =>{
            expect(element).toBeGreaterThanOrEqual(0);            
        });
        functionalPositiveArray.forEach(element =>{
            expect(element).toBeGreaterThanOrEqual(0);
        })
    });
});

describe('mapNumbersIntoStrings',()=>{
    const numbers = [-4,-8,-10,0,12,15,20];
    const stringNumbers = ['-4','-8','-10','0','12','15','20'];
    var mapArray = mapNumbersIntoStrings(numbers);
    var functionalMapArray = functionalMapNumbersIntoStrings(numbers);

    validateArray(mapArray);
    validateArray(functionalMapArray);

    test('Should return string array',() => {
        expect(mapArray).toEqual(stringNumbers);
        expect(functionalMapArray).toEqual(stringNumbers);
    });
});

describe('printType',() =>{

    test('Should call the console.log function',() =>{
        const spy = jest.spyOn(global.console,'log');
        printType(1);
        expect(spy).toHaveBeenCalledWith('number');
        printType('Hi!');
        expect(spy).toHaveBeenCalledWith('string');        

        spy.mockReset;
        spy.mockRestore;
    });
});

describe('isPalindrome', () =>{
    test('Should return true if the string is palindrome',()=>{
        const palindrome = isPalindrome('madam');
        expect(palindrome).toBeTruthy();
    });
});

describe('Person',() => {
    var spy = jest.spyOn(global.console,'log');
    var person = new Person('Jhon',25);
    test('Should print the name in the console', () =>{
        person.printName();

        expect(spy).toHaveBeenCalledWith('Jhon');
        
    });
    describe('printOutPersonAge', () => {
        test('Should return the age of the instantiated Person', () => {
            printOutPersonAge(person);
            expect(spy).toHaveBeenCalledWith(25);
        });
    });
    spy.mockReset;
    spy.mockRestore; 
});

















function validateArray(array){
    test('Should return an Array',()=> {
        expect(array).not.toBeNull();
        expect(Array.isArray(array)).toBeTruthy();
    });
}
