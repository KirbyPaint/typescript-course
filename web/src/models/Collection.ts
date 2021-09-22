import { Eventing } from "./Eventing";
import { User } from "./user";

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
