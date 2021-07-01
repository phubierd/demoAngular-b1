import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './ProductList/ProductList.component';


@NgModule({
    declarations: [ProductComponent,ProductListComponent],
    imports: [BrowserModule,FormsModule],
    exports: [ProductListComponent],
})
export class PropsModule { }
