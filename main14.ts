//any

interface IAPIRESONSE{
    total:number;
    ...a
}
let anyType:any
let unknownType :unknown
anyType="hello";
unknownType="hello";
///
////
console.log(anyType.toUpperCase());

if (typeof unknownType === "string"){
    console.log(unknownType.toUpperCase());
}

//
//

let a:unknown = "nona"
let a:unknown = 3;
a= true
let b:string = a
b.toUpperCase()