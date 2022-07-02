import Cart from './components/Cart.js';
import ProductList from './components/ProductList.js';

class Shop {
  constructor() {
    this.render();
  }

  // при создании элемента задаём, куда он будет добавляться при рендере
  // рендер вызываем в конструкторе Компонента
  render() {
    this.cart = new Cart('app');
    new ProductList('app');
  }
}

// статические методы этого класса используются для
// связи отдельных компонентов в приложение
class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart; // важно! после рендера
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

export default App;

App.init();
