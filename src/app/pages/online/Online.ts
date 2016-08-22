import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Http, Headers} from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'online-page',
    templateUrl: 'Online.html',
    // styleUrls: ['app.component.css'],
})
export class OnlinePage {

    root = 'https://pizza-store.herokuapp.com/api/pizzas';

    posts = null;


    constructor(public http:Http) {
        this.getData();
    }

    public getData() {

        let header:Headers = new Headers();
        header.append('Content-Type', 'application/json');

        return this.http.get(this.root, {
            headers: header
        }).subscribe(data => this.posts = data.json(), err => console.log(err));

    }

    public deletePost(id) {

        let header:Headers = new Headers();
        header.append('Content-Type', 'application/json');

        this.http.delete(this.root + "/"+ id, {
            headers: header
        }).subscribe( data => {
            console.log(data);
            this.getData();
        });

    }
}






