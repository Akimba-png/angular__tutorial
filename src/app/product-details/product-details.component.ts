import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const paramId = Number(routeParam.get('productId'));
    this.product = products.find(elem => elem.id === paramId);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
