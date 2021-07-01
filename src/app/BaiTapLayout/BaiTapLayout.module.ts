import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentComponent } from './BTContent/BTContent.component';
import { BTFooterComponent } from './BTFooter/BTFooter.component';
import { BTHeaderComponent } from './BTHeader/BTHeader.component';
import { BTSideBarComponent } from './BTSidebar/BTSideBar.component';


//Module chỉ quản lý component chứ k có giao diện

@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        BTSideBarComponent,
        BTHeaderComponent,
        BTFooterComponent,
        BTHeaderComponent,
        BTContentComponent
    ], // nơi khai báo các component được sử dụng cho module này
    imports: [], //Import một module khác vào để sử dụng cho module này
    exports: [BaiTapLayoutComponent], //Xuất ra những gì cho các module khác sử dụng
})
export class BaiTapLayoutModule { }
