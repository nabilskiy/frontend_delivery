import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryCalenderComponent } from './history_calender.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { FooterModule } from '../../../common/store/footer/footer.module';
import {CalendarModule} from "angular-calendar";

@NgModule({
    imports: [
        CommonModule, FormsModule, FooterModule, TranslateModule, CalendarModule
    ],
    declarations: [HistoryCalenderComponent]
})
export class HistoryCalenderModule { }
