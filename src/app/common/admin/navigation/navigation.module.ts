import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component.js";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [NavigationComponent],
  imports: [BrowserModule, RouterModule, TranslateModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
