function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

// let combineValues: Function; // 함수가 되어야함을 명시
let combineValues: (a: number, b: number) => number; // 함수 타입이고 number를 반환
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
