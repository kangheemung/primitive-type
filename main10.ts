interface,type

interface Student{
    name:string;
    age?:number;
    isStudent:boolean;
}
let b:Student={name:"noona",age:34}
let c:{name:string,age:number}={name:"noona",age:23}
let d:{name:string|number|boolean,age?:number,isStudent:boolean}={name:"asd",age:12}
let e:{name:string|number|boolean,age?:number,isStudent:boolean}={name:"sdf",age:12}