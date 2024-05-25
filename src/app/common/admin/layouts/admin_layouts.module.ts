import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { admin_blankComponent } from "./admin_blank.component.js";
import { admin_basicComponent } from "./admin_basic.component.js";

import { NavigationModule } from "../navigation/navigation.module.js";
import { TopnavbarModule } from "../topnavbar/topnavbar.module.js";
import { FooterModule } from "../footer/footer.module.js";

@NgModule({
  declarations: [admin_blankComponent, admin_basicComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationModule,
    TopnavbarModule,
    FooterModule,
  ],
  exports: [admin_blankComponent, admin_basicComponent],
})
export class AdminLayoutsModule {}
