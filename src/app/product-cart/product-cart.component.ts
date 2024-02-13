import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  cartItems = this.cartService.getCartItems();
  userForm = this.formBuilder.group({
    name: '',
    email: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  onFormSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
