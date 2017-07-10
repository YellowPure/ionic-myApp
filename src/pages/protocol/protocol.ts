import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'protocol',
    templateUrl: 'protocol.html'
})
export class Protocol {
    constructor(public viewCtrl: ViewController) {

    }

    ngOnInit() {

    }

    cancel() {
        this.viewCtrl.dismiss();
    }
}