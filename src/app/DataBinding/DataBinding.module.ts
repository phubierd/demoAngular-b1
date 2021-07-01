import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBindingComponent/DataBinding.component';

//module hỗ trợ 2waybinding
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [DataBindingComponent],
    imports: [FormsModule],
    exports: [DataBindingComponent],
})
export class DataBindingModule { }


