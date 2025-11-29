interface, type;
interface IStudent {
    name:string;
    age?:number;
    //isStudent:boolean;
}
//オブジェクトのみ定義可能
type TStudent ={
    name:string,
    age?:number
}
type NewType = number|string

let b:TStudent={name: "noona",age:34}
// let c:{name:string,age:number}={name: "noona",age:23}
// let d:{name:string|number|boolean,age?:number,isStudent:boolean}={name: "asdf",age:12}
// let e:{name: string|number|boolean,age?:number, isStudent:boolean}={name:"asdf"}
let c:TStudent={name: "noona",age:23}
let d:TStudent={name: "asdf",age:12}
let e:TStudent={name:"asdf"}