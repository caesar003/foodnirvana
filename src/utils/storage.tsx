import { CartItemInterface } from "./types";
class Cart {
  get() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  add(item: CartItemInterface[]) {
    const _list = this.get();
    this.save([..._list, item]);
    return this.get();
  }
  save(data: CartItemInterface[]) {
    return localStorage.setItem("cart", JSON.stringify(data));
  }
  remove(id: number) {
    const _list = this.get();
    const itemIdx = _list.findIndex((item: CartItemInterface) => Number(item.id) === id);
    _list.splice(itemIdx, 1);
    this.save(_list);
    return this.get();
  }
}

const cart = new Cart();

export { cart };
