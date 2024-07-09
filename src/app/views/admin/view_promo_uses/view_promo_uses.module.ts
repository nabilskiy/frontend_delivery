import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewPromoUsesComponent } from "./view_promo_uses.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FooterModule } from "../../../common/admin/footer/footer.module";
@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, FooterModule],
  declarations: [ViewPromoUsesComponent],
})
export class ViewPromoUsesModule {}
