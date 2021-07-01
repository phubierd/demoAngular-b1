import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './BaiTapLayout/BaiTapLayout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DirectiveModule } from './Directive/Directive.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PropsModule } from './Props/Props.module';

registerLocaleData(en);


@NgModule({
  declarations: [ //Khai báo các component sử dụng được trong module này
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule, // Chỉ cần import module này thì trong app module có thể sử dụng được tất cả những gì mà BaiTapLayout export
    DataBindingModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    PropsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent] //Các thẻ có thể sử dụng được trên file index.html
})
export class AppModule { }
