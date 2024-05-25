import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushMarketingComponent } from './push_marketing.component';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'angular2-ui-switch';
import { TranslateModule } from 'ng2-translate';
import { FooterModule } from '../../../common/admin/footer/footer.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [
        CommonModule,BrowserModule,UiSwitchModule,FormsModule,TranslateModule,FooterModule,Ng2Bs3ModalModule
    ],
    declarations: [PushMarketingComponent]
})
export class PushMarketingModule { }
