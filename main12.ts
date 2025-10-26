// User 인터페이스 작성
// 여기에 작성
interface User {
    id: number;
    name: string;
    email: string;
}
// Admin 인터페이스 작성 (User 확장)
// 여기에 작성
interface Admin extends User {
    role: string;
}

const regularUser: User ={
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  const administrator: Admin ={
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "System Administrator",
  };
  // 결과를 콘솔에 출력 (선택 사항)
console.log("Regular User:", regularUser);
console.log("Administrator:", administrator);