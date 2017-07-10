import Mock from 'mockjs';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
import { LoginModal } from '../loginModal/loginModal';
import {Search} from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lookType: string = 'lookin';
  public items = [];
  public looklist = [];
  public headlist = [];
  public headsrc: string = 'http://7xq7s7.com2.z0.glb.qiniucdn.com/a861323646df21a3941cf3ece504acf4?imageMogr2/thumbnail/300x300/interlace/1&e=1498789790&token=3cYRoEh67hh3wAsX6ex9FXqk1fT8heJvl43iffYt:P4Vd8WUUMBv0r_vtvkYAj5Mz0jw=';
  @ViewChild('mySlider') slider: Slides;
  slides: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
    this.initData();
  }

  initData() {
    this.headlist = Mock.mock({
      'list|1-10': [{
        'id|+1': 1,
        'src': '@image',
        'title': '@cname'
      }]
    }).list;
    this.looklist = Array.from({length: 10}).map(() => {
      return {
        list: this.items,
        title: '花狸追',
        time: '昨天 21:04',
        read: '7300',
        head: 'http://7xq7s7.com2.z0.glb.qiniucdn.com/a861323646df21a3941cf3ece504acf4?imageMogr2/thumbnail/300x300/interlace/1&e=1498789790&token=3cYRoEh67hh3wAsX6ex9FXqk1fT8heJvl43iffYt:P4Vd8WUUMBv0r_vtvkYAj5Mz0jw='
      };
    });
  }

  toLogin() {
    let modal = this.modalCtrl.create(LoginModal);
    modal.present();
  }

  toSearch() {
    console.log('to search page');
    this.navCtrl.push(Search);
  }

  changeSegment(value) {
    this.lookType = value;
    // const selectedIndex = this.slides.findIndex((slide) => {
    //   return slide.id === value;
    // });
    // this.slider.slideTo(selectedIndex);
  }

  onSlideChanged() {
    
  }

  doRefresh(refresh) {
    setTimeout(() => {
      refresh.complete();
    }, 2000);
  }

  doInfinite(infinite) {
    setTimeout(() => {
      infinite.complete();
    }, 2000);
  }
}
