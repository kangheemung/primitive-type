// Corrected Interface Definition
interface IAPIRESONSE {
    total: number;
    // Add other properties here as needed
}

let anyType: any;
let unknownType: unknown;

anyType = "hello";
unknownType = "hello";

console.log((anyType as string).toUpperCase());  // Type assertion for 'anyType'

if (typeof unknownType === "string") {
    console.log((unknownType as string).toUpperCase());
}

let a: unknown = "nona";  // Valid assignment
a = 3;  // Valid assignment
a = true;  // Valid assignment

let b: string = a as string;  // Type assertion for 'a'
console.log(b.toUpperCase());  // Here you can safely call toUpperCase()
