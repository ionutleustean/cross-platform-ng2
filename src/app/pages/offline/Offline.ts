/// <reference path="../../../../typings/index.d.ts" />


import {Component} from '@angular/core';
import {PlatformDetection} from '../../common/Platform';


@Component({
    moduleId: module.id,
    selector: 'offline-page',
    templateUrl: 'Offline.html',
    providers: [PlatformDetection]
    // styleUrls: ['app.component.css'],
})
export class OfflinePage {

    private platformName:string;

    constructor(private platform:PlatformDetection) {
        this.platformName = this.platform.getPlatform();
    }

}






