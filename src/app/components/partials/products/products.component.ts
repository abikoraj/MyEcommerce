import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public product: ProductsService) {

  }
  url = "https://ecomtest.gharsaaman.com/";

  ngOnInit(): void {
    this.product.loaditems();
  }



}
