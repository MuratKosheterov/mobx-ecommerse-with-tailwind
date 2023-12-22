import { makeAutoObservable } from "mobx";

class SidebarStore {
  status = false;

  constructor() {
    makeAutoObservable(this);
  }

  openSidebar = () => {
    this.status = !this.status;
  };
}

export default new SidebarStore();
