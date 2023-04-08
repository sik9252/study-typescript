"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// let combineValues: Function; // 함수가 되어야함을 명시
let combineValues; // 함수 타입이고 number를 반환
combineValues = add2;
// combineValues = printResult;
console.log(combineValues(8, 8));
function add2AndHandle(n1, n2, cb) {
    const result = n1 + n2;
    return cb(result);
}
add2AndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
});
