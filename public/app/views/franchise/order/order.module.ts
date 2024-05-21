import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranchiseStoreOrderComponent } from './order.component';
import {BrowserModule} from "@angular/platform-browser";
import {DropdownModule} from "ng2-dropdown";
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { TranslateModule } from 'ng2-translate';
import { FooterModule } from '../../../common/franchise/footer/footer.module';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    CommonModule, DropdownModule, BrowserModule, FooterModule, FormsModule, RouterModule, TranslateModule
  ],
  declarations: [FranchiseStoreOrderComponent]
})
export class FranchiseStoreOrderModule { }
