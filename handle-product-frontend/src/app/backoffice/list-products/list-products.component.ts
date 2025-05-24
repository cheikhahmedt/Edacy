import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductService } from '../../core/services/product/product.service';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
  
  showFirst = true;
  intervalId: any;
  optionItems: any[] = [];
  product: any;
  products: any[] = [];
  productService = inject(ProductService); 

  constructor() {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.showFirst = !this.showFirst;
    }, 5000);
    this.getproducts();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getproducts() {
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
