import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import {BrowserModule} from "@angular/platform-browser";
import {DropdownModule} from "ng2-dropdown";
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { UiSwitchModule } from 'angular2-ui-switch';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {TooltipModule} from "ngx-tooltip";
import { TranslateModule } from 'ng2-translate';
import { FooterModule } from '../../../common/admin/footer/footer.module';
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
  imports: [
    CommonModule,DropdownModule,BrowserModule,MyDatePickerModule,FormsModule,FooterModule,RouterModule,UiSwitchModule,Ng2Bs3ModalModule,TooltipModule,TranslateModule
  ],
  declarations: [StoresComponent]
})
export class StoresModule { }
