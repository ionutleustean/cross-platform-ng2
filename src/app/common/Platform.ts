
/// <reference path="../../../typings/index.d.ts" />

declare var process: any;

export class PlatformDetection {

    private currentPlatform = null;
    private process = null;

    private platform = {
        cordova:"cordova",
        electron:"electron",
        browser:"browser",
    };

    constructor() {
        try {
            if (process) {
                this.process = process;
            }
        }
        catch (err) {
            console.log(err);
            this.process = null;
        }


        if (window && window.cordova) {
            this.currentPlatform = this.platform.cordova;
        }
        else if (this.process) {
            this.currentPlatform = this.platform.electron
        }
        else {
            this.currentPlatform = this.platform.browser;
        }
    }

    public getPlatform(){
        return this.currentPlatform;
    }

    public isBrowser(){
        return (this.currentPlatform === this.platform.browser);
    }

    public isCordova(){
        return (this.currentPlatform === this.platform.cordova);
    }

    public isElectron(){
        return (this.currentPlatform === this.platform.electron);
    }



}
