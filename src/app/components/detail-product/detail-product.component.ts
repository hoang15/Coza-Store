import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductserviceService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(
      (res: any) => {
        this.product = res;
      },
      (err) => {}
    );
  }
}
