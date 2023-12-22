import { makeAutoObservable } from "mobx";

class ProductStore {
  cartItems = [];

  get amount() {
    return this.cartItems.reduce((acc, item) => acc + item.amount, 0);
  }

  get total() {
    return this.cartItems.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
  }

  get tax() {
    return this.cartItems.reduce(
      (acc, item) => acc + (item.amount * item.price) * 0.12,
      0
    );
  }



  constructor() {
    makeAutoObservable(this);
  }

  addToCart = (item) => {
    const cartItem = this.cartItems.find((cart) => {
      return cart.id === item.id;
    });
    cartItem
      ? (cartItem.amount += 1)
      : this.cartItems.push({ ...item, amount: 1 });
  };

  increment = (id) => {
    const index = this.cartItems.findIndex((item) => {
      return item.id === id;
    });
    this.cartItems[index].amount += 1;
  };

  decrement = (id) => {
    const index = this.cartItems.findIndex((item) => {
      return item.id === id;
    });
    if (this.cartItems[index].amount > 1) {
      this.cartItems[index].amount -= 1;
    }
  };

  removeFromCart = (id) => {
    this.cartItems = this.cartItems.filter((item) => {
      return item.id !== id;
    });
  };

  reset = () => {
    this.cartItems = [];
  };
}

export default new ProductStore();
