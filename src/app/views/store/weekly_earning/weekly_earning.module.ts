import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StorWeeklyEarningComponent } from "./weekly_earning.component";
import { DropdownModule } from "ng2-dropdown";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MyDatePickerModule } from "mydatepicker";
import { TranslateModule } from "@ngx-translate/core";

import { FooterModule } from "../../../common/store/footer/footer.module";
import { MomentModule } from "angular2-moment";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
    DropdownModule,
    FormsModule,
    FooterModule,
    RouterModule,
    MyDatePickerModule,
    TranslateModule,
    MomentModule,
  ],
  declarations: [StorWeeklyEarningComponent],
})
export class StorWeeklyEarningModule {}
