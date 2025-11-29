interface IPerson{
    name:string;
    age:number;
    gender:string;
}
interface Iforeigner extends IPerson{
    // name:string;
    // age:number;
    // gender:string;
    nationality:string;
}
type IForeigner = IPerson | {nationality:string,period:Date}
// let american :IForeigner={nationality:"american",name: "jacob",age:23,gender: "F"}
let american :IForeigner={nationality:"american",period:new Date("")}

// interface INewForeigner