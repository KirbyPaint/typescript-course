import { User } from "./models/user";

const user = new User({ name: "name", age: 20 });

console.log(user.get("name"));
console.log(user.get("age"));
