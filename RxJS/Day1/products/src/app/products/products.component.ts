// import { Component } from '@angular/core';
// import { ProductsService } from '../products.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
// })
// export class ProductsComponent {
//   data: any = [];

//   constructor(private _ProductsService: ProductsService) {}

//   ngOnInit() {
//     this._ProductsService.getProducts().subscribe((res) => {
//       this.data = res;
//       console.log(this.data.products);
//     });
//   }
// }

import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  data$: Observable<any> = this._ProductsService.getProducts();

  Ob: any = [];

  constructor(private _ProductsService: ProductsService) {}

  intervalSubscription = this._ProductsService
    .intervalOb
    .pipe(
      take(5),
      tap((data) => {
        this.Ob.push(data);
      })
    )
    .subscribe((data) => console.log(data));

  ngOnInit() {}
}
