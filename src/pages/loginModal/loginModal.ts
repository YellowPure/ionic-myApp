import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';
import { Protocol } from '../protocol/protocol';

@Component({
    templateUrl: 'loginModal.html',
    selector: 'login-modal'
})
export class LoginModal {
    constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {

    }

    ngOnInit() {

    }

    cancel() {
        console.log('cancel');
        this.viewCtrl.dismiss();
    }

    toProtocol() {
        console.log('toProtocol');
        let modal = this.modalCtrl.create(Protocol);
        modal.present();
    }

    getSms() {
        console.log('getSms');
    }
}