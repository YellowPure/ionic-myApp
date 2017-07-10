import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        // console.log(this.text);
    }

    toDetail() {
        this.navCtrl.push(Detail);
    }
}