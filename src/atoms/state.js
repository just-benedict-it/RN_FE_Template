import { atom } from "recoil";

const subscribedState = atom({
  key: "subscribedState",
  default: null,
});

export { subscribedState };
