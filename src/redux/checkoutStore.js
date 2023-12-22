import { makeAutoObservable } from "mobx";


class checkoutStore {
    openChekout = false;

    constructor() {
        makeAutoObservable(this)
    }


    addCheckout = () => {
        this.openChekout = !this.openChekout
    }
}

export default new checkoutStore(); 