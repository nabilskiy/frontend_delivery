import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { online_menu_blankComponent } from "./online_menu_blank.component.js";
import { online_menu_basicComponent } from "./online_menu_basic.component.js";

import { NavigationModule } from "../navigation/navigation.module.js";
import { TopnavbarModule } from "../topnavbar/topnavbar.module.js";
import { FooterModule } from "../footer/footer.module.js";

@NgModule({
  declarations: [online_menu_blankComponent, online_menu_basicComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationModule,
    TopnavbarModule,
    FooterModule,
  ],
  exports: [online_menu_blankComponent, online_menu_basicComponent],
})
export class OnlineMenuLayoutsModule {}
