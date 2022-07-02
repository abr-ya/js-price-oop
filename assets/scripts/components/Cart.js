import { Component } from '../Component.js';

class Cart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalEl.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    return this.items.reduce((acc, item) => acc + item.price, 0)
  }

  constructor(renderHookId) {
    super(renderHookId, false); // не рендерим, пока нет обработчика
    this.orderNow = () => {
      console.log('Ordering...');
      console.log(this.items);
    }
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items, product];
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createElement('section', 'cart');
    cartEl.className = 'cart';
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', this.orderNow)
    this.totalEl = cartEl.querySelector('h2');

    return cartEl;
  }
}

export default Cart;
