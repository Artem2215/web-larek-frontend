interface IPage {
  basket: IBasket;
  products: IProductList;
  getProducts: () => void;
}

class Page implements IPage {
  basket: IBasket;
  products: IProductList;
  constructor(data: IProductList) {}
  getProducts: () => void;
}

interface IBasket {
  products: Array<IProduct>;
  totalPrice: number | null;
  openBasketModal: (
    products: Array<IProduct>,
    totalPrice: number | null
  ) => void;
}

class Basket implements IBasket {
  products: Array<IProduct>;
  totalPrice: number | null;
  constructor (data: IBasket) {}
  openBasketModal: (
    products: Array<IProduct>,
    totalPrice: number | null
  ) => void;
  deleteItem: () => void;
  designOrder: () => void;
  closeModal: () => void;
  costCalculation: () => void;
}

interface IProductList {
  total: number;
  items: Array<IProduct>;
}

class ProductList implements IProductList {
  total: number;
  items: Array<IProduct>;
  constructor (data: IProductList) {}
}

interface IProduct {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  openModal: (data: IProductDescription) => void;
}

class Product implements IProduct {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  constructor (data: IProduct) {
    if (!data) {
      // Реализация поимки ошибки ("error": "NotFound")
    } else {
      // Реализация объекта
    }
  }
  openModal: (data: IProductDescription) => void;
}

interface IProductDescription extends IProduct {
  description: string;
}

class ProductDescription implements IProductDescription {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
  constructor (data: IProductDescription) {}
  openModal: (data: IProductDescription) => void;
  buyProduct: () => void;
  closeModal: () => void;
}

interface IOrder { // "POST" method
  payment: string;
  address: string;
  email: string;
  phone: string;
  totalPrice: number;
  items: Array<IProduct>;
}

interface IOrderSuccess {
  id: string;
  totalPrice: number; 
}

interface IProductItemNotFound {
  error: string;
}

interface IPaymentWrongTotal {
  error: string;
}

interface IPaymentNoAddress {
  error: string;
}

class Order implements IOrder {
  payment: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  items: Array<IProduct>;

  constructor(data: IOrder) {}

  validateAndSendOrder(): IOrderSuccess | IProductItemNotFound | IPaymentWrongTotal | IPaymentNoAddress {
    if (!this.address) { // Проверка наличия адреса
      return { error: 'Адрес не введен' };
    }
    if (!this.items) { // Проверка наличия каждого товара в списке items
      return { error: 'Товар не найден' };
    }
    if (!this.totalPrice) { // Проверка на корректность суммы заказа
      return { error: 'Неверно указана сумма заказа' };
    }
  }
  postOrder: () => void;
  costCalculation: () => void;
}

interface IPaymentMethodAndAddress {
  payment: string;
  address: HTMLInputElement;
  nextModal: (
    email: HTMLInputElement,
    phone: HTMLInputElement
  ) => void;
  closeModal: () => void;
}

class PaymentMethodAndAddress implements IPaymentMethodAndAddress {
  payment: string;
  address: HTMLInputElement;
  constructor() {};
  nextModal: (
    email: HTMLInputElement,
    phone: HTMLInputElement
  ) => void;
  closeModal: () => void;
}

interface IContactDetails {
  email: HTMLInputElement;
  phone: HTMLInputElement;
  nextModal: (
    totalPrice: number,
    items: Array<IProduct>
  ) => void;
  closeModal: () => void;
}

class ContactDetails  implements IContactDetails {
  email: HTMLInputElement;
  phone: HTMLInputElement;
  constructor() {};
  nextModal: (
    totalPrice: number,
    items: Array<IProduct>
  ) => void;
  closeModal: () => void;
}

// interface IOrderTotal {
//   totalPrice: number;
//   items: Array<IProduct>;
//   payForOrder: (
//     totalPrice: number
//   ) => void;
//   closeModal: () => void;
// }

// class OrderTotal implements IOrderTotal {
//   totalPrice: number;
//   items: Array<IProduct>;
//   constructor() {};
//   payForOrder: (
//     totalPrice: number
//   ) => void;
//   closeModal: () => void;
// }

interface IPaymentResult {
  totalPrice: number;
  backToMainPage: () => void;
  closeModal: () => void;
}

class PaymentResult implements IPaymentResult {
  totalPrice: number;
  constructor (totalPrice: number) {}
  backToMainPage: () => void;
  closeModal: () => void;
}

class OrderModalManager {
  private currentModal: 'basket' | 'paymentMethodAndAddress' | 'emailAndPhone' | 'orderSuccess' | null;
  openModal(modalName: 'paymentMethodAndAddress' | 'emailAndPhone' | 'orderSuccess'): void {}
  closeModal(): void {}
  handleNextModal(): void {}
}