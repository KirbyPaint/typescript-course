import { User } from "./models/user";

const user = new User({});

user.on("change", () => {});
user.on("change", () => {});
user.on("test", () => {});

console.log(user);
