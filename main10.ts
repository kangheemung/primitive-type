//interface, type

interface IStudent{
    name:string;
    age?:number;
    //isStudent:boolean;
}
type TStudent ={
    name:string,
    age?:number
}

let b:IStudent={name:"noona",age:34};
let c:IStudent={name:"noona",age:23};
let d:TStudent={name:"asd",age:12};
let e:TStudent={name:"sdf"};
let f_fixed: IStudent = { name: "Hyun", age: 25 };