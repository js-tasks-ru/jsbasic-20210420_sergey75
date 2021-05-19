import createElement from '../../assets/lib/create-element.js';


export default class ProductCard {
  constructor(product) {
    this._name = product.name;
    this._price = product.price;
    this._category = product.category;
    this._image = product.image;
    this._id = product.id;   
    this._parent = document.querySelector('#holder');
    this.elem = this._parent.insertAdjacentHTML('afterbegin', 
        `<div class="card">
          <div class="card__top">
              <img src="/assets/images/products/${this._image}" class="card__image" alt="product">
              <span class="card__price">€${this._price.toFixed(2)}</span>
          </div>
          <div class="card__body">
              <div class="card__title">${this._name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
        </div>`    
      )   

    this._addButton = document.querySelector('.card__button');   
    this._addButton.addEventListener(new CustomEvent("product-add", {
      detail: this._id,
      bubbles: true
    }));  

  }

}




