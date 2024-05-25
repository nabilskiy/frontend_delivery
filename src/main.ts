import "./polyfills.js";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment.js";
import { AppModule } from "./app/index.js";
//import { AppStoreModule } from './app/';
//import { AppUserModule } from './app/';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
