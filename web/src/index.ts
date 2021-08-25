import { User } from "./models/user";

const user = new User({});

user.on("change", () => {
  console.log("change 1");
});
user.on("change", () => {
  console.log("change 2");
});
user.on("test", () => {
  console.log("save was triggered");
});

user.trigger("change");
user.trigger("test");
user.trigger("nothing");
