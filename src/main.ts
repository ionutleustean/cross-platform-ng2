import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS} from './app/';
import {HTTP_BINDINGS} from '@angular/http'


if (environment.production) {
  enableProdMode();
}



bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_BINDINGS
]);

