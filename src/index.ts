/// <reference path="../typings/index.d.ts"/>
//
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_BINDINGS} from '@angular/http'


import {Hello} from './app/hello';


//
// import './index.less';
//
// import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
// import {routes, Root} from './routes';
//
//
declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

const routes: RouterConfig = [
  { path: '', component: Hello },
  // { path: 'action', component: Action },
];

export const appRouterProviders = [
  provideRouter(routes)
];



@Component({
  selector: 'app',
  template: '<div> <router-outlet></router-outlet> </div>',
  directives: [ROUTER_DIRECTIVES]
})


export class App {

  constructor() {
    console.log('test');

  }

}

bootstrap(App, [
  appRouterProviders,
  HTTP_BINDINGS
]);
