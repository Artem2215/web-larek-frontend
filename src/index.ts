import './scss/styles.scss';

namespace Model { 
  interface IBasket {
    products: IProduct[] | null;
    totalPrice: number | null;
    openModal: () => Basket;
  }

  class Basket implements IBasket {
    products: IProduct[];
    totalPrice: number | null;
    constructor (data: IBasket) {
      //
    }
    openModal: () => Basket;
    closeModal: () => void;
    deleteItem: () => void;
    designOrder: () => void;
    costCalculation: () => void;
  }

  interface IProductList {
    total: number;
    items: IProduct[];
  }

  class ProductList implements IProductList {
    total: number;
    items: IProduct[];
    constructor (data: IProductList) {
      //
    }
  }
  
  interface IProduct {
    id: string; 
    image: string;
    title: string;
    category: string;
    price: number;
    openModal: () => void;
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
    openModal: () => ProductDescription;
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
    constructor (data: IProductDescription) {
      //
    }
    openModal: () => void;
    buyProduct: () => void;
    closeModal: () => void;
  }

  interface IPaymentMethodAndAddress {
    payment: string
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
}

namespace View {
  class BasketView {
    constructor() {}
    openModal() {
      // Логика открытия модального окна корзины
    }
    deleteItem() {
      // Логика удаления товара из корзины
    }
    designOrder() {
      // Логика оформления заказа (открытие последующих модальны окон)
    }
    closeModal() {
      // Логика закрытия модального окна корзины
    }
    costCalculation() {
      // Логика расчета итоговой стоимости продуктов в корзине
    }
  }

  class ProductListView {
    constructor() {}
    render() {
      // Логика отображения списка продуктов
    }
  }

  class ProductView {
    constructor() {}
    render() {
      // Логика отображения продукта
    }
    openProductModal() {
      // Логика открытия модального окна продукта
    }
  }

  export class ProductDescriptionView {
    constructor() {}
    render() {
      // Логика отображения описания продукта
    }
    buyProduct() {
      // Логика покупки продукта
    }
    closeModal() {
      // Логика закрытия модального окна описания продукта
    }
  }

  class PaymentMethodAndAddressView {
    constructor() {}
    render() {
      // Логика отображения метода оплаты и адреса
    }
    nextModal() {
      // Логика перехода к следующему модальному окну
    }
    closeModal() {
      // Логика закрытия модального окна метода оплаты и адреса
    }
  }

  class ContactDetailsView {
    constructor() {}
    render() {
      // Логика отображения контактных данных
    }
    nextModal() {
      // Логика перехода к следующему модальному окну
    }
    closeModal() {
      // Логика закрытия модального окна контактных данных
    }
  }

  class PaymentResultView {
    constructor() {}
    render() {
      // Логика отображения результата оплаты
    }
    backToMainPage() {
      // Логика возвращения на главную страницу
    }
    closeModal() {
      // Логика закрытия модального окна результата оплаты
    }
  }
}

namespace Controller {

}