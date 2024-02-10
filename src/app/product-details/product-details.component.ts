import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const paramId = Number(routeParam.get('productId'));
    this.product = products.find(elem => elem.id === paramId);
  }
}
