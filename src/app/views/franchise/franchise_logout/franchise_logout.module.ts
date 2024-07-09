import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FranchiseLogoutComponent } from "./franchise_logout.component";
import { TranslateModule } from "@ngx-translate/core";

import { FooterModule } from "../../../common/store/footer/footer.module";
@NgModule({
  imports: [CommonModule, FooterModule, TranslateModule],
  declarations: [FranchiseLogoutComponent],
})
export class FranchiseLogoutModule {}
