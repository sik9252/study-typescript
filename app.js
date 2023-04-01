var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "kevin",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("is admin...");
}
