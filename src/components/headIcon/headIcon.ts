import { Component, Input } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Detail } from '../../pages/detail/detail';

@Component({
    selector: 'head-icon',
    templateUrl: 'headIcon.html'
})
export class HeadIcon {
    @Input()
    text: string;

    @Input()
    src: string;

    nav: any;

    constructor(public navCtrl: NavController, public appCtrl: App) {
        this.nav = this.appCtrl.getRootNav();
    }

    ngOnInit() {
        // console.log(this.text);
    }

    toDetail() {
        this.nav.push(Detail);
    }
}