// Corrected function return type declarations
function infinite(): never {
    while (true) {}
}

function throwError(): never {
    throw new Error("エラー");
}

type AorB = { a: number, b?: never } | { a?: never, b: number };

let c1: AorB = {
    a: 2,
};

let c2: AorB = {
    b: 3,
};

let c: AorB = {
    a: 2,
    b: 3, // Assigning a value to 'b' property matching the defined type
};