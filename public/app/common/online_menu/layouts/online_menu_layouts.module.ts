import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {online_menu_blankComponent} from "./online_menu_blank.component.ts";
import {online_menu_basicComponent} from "./online_menu_basic.component.ts";

import {NavigationModule} from "../navigation/navigation.module";
import {TopnavbarModule} from "../topnavbar/topnavbar.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
    declarations: [online_menu_blankComponent, online_menu_basicComponent],
    imports     : [BrowserModule, RouterModule, NavigationModule, TopnavbarModule, FooterModule],
    exports     : [online_menu_blankComponent, online_menu_basicComponent]
})

export class OnlineMenuLayoutsModule {}
