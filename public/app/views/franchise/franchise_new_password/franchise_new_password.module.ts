import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranchiseNewPasswordComponent } from './franchise_new_password.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { TranslateModule } from 'ng2-translate';
import { CustomFormsModule } from 'ng2-validation'
import { FooterModule } from '../../../common/store/footer/footer.module';
@NgModule({
  imports: [
    CommonModule,FormsModule,CustomFormsModule,FooterModule,RouterModule,TranslateModule
  ],
  declarations: [FranchiseNewPasswordComponent]
})
export class FranchiseNewPasswordModule { }
