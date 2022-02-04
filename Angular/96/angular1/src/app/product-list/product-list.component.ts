import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  disabled = true;

  share() {
    window.alert('The product has been shared!');
  }

  mouseDown() {
    console.log('Mouse down');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

