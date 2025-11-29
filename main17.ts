interface IPerson{
    name:string;
    age:number;
}
interface Iforeigner extends IPerson{
    // name:string;
    // age:number;
    // gender:string;
    nationality:string;
}
type IForeigner = Iperson |{nationallty:string,period:Date}
    interface INewForeigner