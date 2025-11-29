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
let american :IForeigner={nationality:"american"}
interface INewForeigner