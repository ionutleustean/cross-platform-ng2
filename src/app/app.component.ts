import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, provideRouter, RouterConfig} from '@angular/router';


import {OnlinePage} from './pages/online/Online';
import {OfflinePage} from './pages/offline/Offline';


export const routes: RouterConfig = [
    {path: '', component: OnlinePage},
    {path: 'offline', component: OfflinePage}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'app works!';
    internetStatus = false;

    constructor() {
    }

    getInternetStatus() {
        this.internetStatus = navigator.onLine;
        let self = this;
        window.addEventListener("offline", function (e) {
            self.internetStatus = navigator.onLine
        });
        window.addEventListener("online", function (e) {
            self.internetStatus = navigator.onLine
        });

        if (this.internetStatus === true) {
            return "tag-success";
        } else {
            return "tag-danger";
        }
    }
}




