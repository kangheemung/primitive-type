//// 인터페이스 작성
interface user {
    id:number;
    name:string;
}
// 타입 작성
type userWithEmail={
    id:number,
    name:string,
    email:string
}
const user = {
    id: 1,
    name: "Alice",
};

const userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};