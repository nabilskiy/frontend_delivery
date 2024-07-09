import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddAdminComponent } from "./add_admin.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UiSwitchModule } from "angular2-ui-switch";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    TranslateModule,
  ],
  declarations: [AddAdminComponent],
})
export class AddAdminModule {}
