import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from '../loginModal/loginModal';

@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html'
})
/**
 * 关注页
 */
export class CollectPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }


  ngOnInit() {

  }

  toLogin() {
    let modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }
}
