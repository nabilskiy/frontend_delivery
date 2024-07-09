import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TopnavbarComponent } from "./topnavbar.component.js";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [TopnavbarComponent],
  imports: [BrowserModule, TranslateModule],
  exports: [TopnavbarComponent],
})
export class TopnavbarModule {}
