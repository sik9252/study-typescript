//let userInput: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "ABC";

if (typeof userInput === "string") {
  userName = userInput; // 정상 작동
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
