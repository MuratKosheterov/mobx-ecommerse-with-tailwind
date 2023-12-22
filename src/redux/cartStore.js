import { makeAutoObservable } from "mobx";

class CartStore {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  cartOpen = () => {
    this.isOpen = !this.isOpen;
  };
}

export default new CartStore();
