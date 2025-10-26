//void

function double(a,b){
    console.log(a,b)
}

interface NewType{
    name:string;
    age:number;
    double : (a:number,b:number)=>void
    getAge:(age:number)=>void
}