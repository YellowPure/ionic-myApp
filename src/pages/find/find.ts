import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from '../loginModal/loginModal';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
/**
 * 发现页
 */
export class FindPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit() {

  }

  toLogin() {
    let modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }
}
