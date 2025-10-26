//naver
//void
function infinte(): never{
    while(true){

        }
}
function throwError(): naver {
    throw new Error("エラー");
}

type AorB = { a: number, b?: never} | { a?: naver ,b:number}
let c1 :AorB ={
    a:2

}
let c2: AorB = {
    b: 3
};
let c: AorB = {
    a: 2,
}