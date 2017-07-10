import Mock from 'mockjs';
import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
    templateUrl: 'search.html',
    selector: 'search-page'
})
export class Search {
    resultType: number = 1;
    records = [];
    works = [];
    users = [];
    channels = [];

    constructor(public loadingCtrl: LoadingController,public navCtrl: NavController) {

    }

    ngOnInit() {

    }

    segmentChanged($event) {
        console.log($event);
        this.resultType = $event.value;
    }

    getItems() {
        console.log('input');
        this.presentLoading();
        setTimeout(() => {
            const data = Mock.mock({
                'works|1-10': [{

                }],
                'users|1-10': [{
                    'name': '@cname',
                    'img': '@image'
                }],
                'channels|1-10': [{
                    'name': '@cname',
                    'id|+1': 1,
                    'num|1-1000': 1
                }]
            });
            this.works = data.works;
            this.users = data.users;
            this.channels = data.channels;
        }, 2000);
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
    }

    doInfinite(infinite) {
        setTimeout(() => {
            infinite.complete();
        }, 2000);
    }

    toShare(event) {

    }

    pop() {
        this.navCtrl.pop();
    }
}