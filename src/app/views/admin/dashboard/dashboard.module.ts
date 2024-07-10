import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { NgChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";
import { FooterModule } from "../../../common/admin/footer/footer.module";
import { MyDatePickerModule } from "mydatepicker";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    FooterModule,
    MyDatePickerModule,
    TranslateModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
