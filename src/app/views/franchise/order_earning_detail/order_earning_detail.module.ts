import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FranchiseOrderEarningDetailComponent } from "./order_earning_detail.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FooterModule } from "../../../common/franchise/footer/footer.module";
@NgModule({
  imports: [CommonModule, RouterModule, FooterModule, TranslateModule],
  declarations: [FranchiseOrderEarningDetailComponent],
})
export class FranchiseOrderEarningDetailModule {}
