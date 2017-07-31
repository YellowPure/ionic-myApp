import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from '../loginModal/loginModal';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import Mock from 'mockjs';

@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html'
})
/**
 * 关注页
 */
export class CollectPage {
  isLogin: boolean = false;
  list = [];
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, protected loginPro: LoginServiceProvider) {
    this.isLogin = this.loginPro.getUserData() ? true : false;
    this.list = Mock.mock({
      'list|1-10': [{
        'src': '@image',
        'name': '@cname',
        'id|+1': 1,
        'num|1-100': 1,
      }]
    }).list;
  }


  ngOnInit() {

  }

  toLogin() {
    let modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }
}
