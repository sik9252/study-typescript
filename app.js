//let userInput: any;
var userInput;
var userName;
userInput = 5;
userInput = "ABC";
if (typeof userInput === "string") {
    userName = userInput; // 정상 작동
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
