import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { TranslateModule } from "@ngx-translate/core";

import { ProfileModule } from "../../../views/store/profile/profile.module";

@NgModule({
  imports: [BrowserModule, RouterModule, TranslateModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
