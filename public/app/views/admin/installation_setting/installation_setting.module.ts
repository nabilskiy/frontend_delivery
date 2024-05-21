import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstallationSettingComponent} from './installation_setting.component';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'angular2-ui-switch';
import { TranslateModule } from 'ng2-translate';


@NgModule({
    imports: [
        CommonModule,BrowserModule,FormsModule, UiSwitchModule,TranslateModule
    ],
    declarations: [InstallationSettingComponent]
})
export class InstallationSettingModule {}
