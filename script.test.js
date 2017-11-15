import {
    generateRandomNumber,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings
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
    var numbers = [-4,-8,-10,0,12,15,20];
    var mapArray = mapNumbersIntoStrings(numbers);
    var functionalMapArray = functionalMapNumbersIntoStrings(numbers);

    validateArray(mapArray);
    validateArray(functionalMapArray);
});



function validateArray(array){
    test('Should return an Array',()=> {
        expect(array).not.toBeNull();
        expect(Array.isArray(array)).toBeTruthy();
    });
}
