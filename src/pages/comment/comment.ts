import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginModal } from '../loginModal/loginModal';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
/**
 * 发现页
 */
export class CommentPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit() {

  }
}
