import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveComponent } from './DirectiveComponent/Directive.component';

//module sử dụng 2waybinding
import { FormsModule } from '@angular/forms';
import { NgContentComponent } from './ngContentDemo/ngContentDemo.component';
//import module antd để sử dụng thẻ 
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AntDesignModule } from '../_core/common/Antd.module';


@NgModule({
    declarations: [DirectiveComponent,NgContentComponent],
    imports: [BrowserModule,FormsModule,AntDesignModule],
    exports: [DirectiveComponent],
})
export class DirectiveModule { }


