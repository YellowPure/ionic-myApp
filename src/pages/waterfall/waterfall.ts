import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the WaterfallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-waterfall',
  templateUrl: 'waterfall.html',
})
export class WaterfallPage {
  public lookType: string = 'lookin';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterfallPage');
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
