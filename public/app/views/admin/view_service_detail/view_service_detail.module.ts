import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewServiceDetailComponent } from './view_service_detail.component';
import {RouterModule} from "@angular/router";
import { TranslateModule } from 'ng2-translate';
import { FooterModule } from '../../../common/admin/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,RouterModule,TranslateModule,FooterModule
  ],
  declarations: [ViewServiceDetailComponent]
})
export class ViewServiceDetailModule { }
