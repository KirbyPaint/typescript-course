import { User } from "./models/user";

const user = new User({ id: 1, name: "newer name" });

user.on("save", () => {
  console.log(user);
});

user.save();
