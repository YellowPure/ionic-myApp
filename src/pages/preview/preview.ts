import { Component } from '@angular/core';
import { NavParams, AlertController, ToastController } from 'ionic-angular';

@Component({
    templateUrl: 'preview.html',
    selector: 'page-preview'
})
/**
 * 预览图片 视频
 */
export class Preview {
    type: any;
    allow: boolean;
    showAll: boolean; // 
    items: any;

    constructor(public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
        const type = this.navParams.get('type');
        // 1 图片 2 视频
        this.type = type;
        // 是否允许查看
        this.allow = this.navParams.get('allow');
        this.showAll = true;
        this.items = Array.from({length: 10});
    }

    ngOnInit() {
        console.log(this.type);
    }

    showOrhide(event:Event) {
        let e = event["srcEvent"];
        if(e && e != undefined && e != null)
        {
            let stopPropagation = e["stopPropagation"];
            if(stopPropagation && stopPropagation != undefined && stopPropagation != null)
            {
                e.stopPropagation();
            }
        }
        this.showAll = !this.showAll;
        console.log(this.showAll);
    }

    alertBuy() {
        let confirm = this.alertCtrl.create({
        title: '需要399金币',
        message: '本作品包含付费内容',
        buttons: [
            {
                text: '取消',
                handler: () => {

                }
            },
            {
                text: '购买',
                handler: () => {
                    console.log('Agree clicked');
                    this.toastLogin();
                }
            }
            ]
        });
        confirm.present();
    }

    toastLogin() {
        let toast = this.toastCtrl.create({
                message: '请先登录',
                duration: 3000,
                position: 'bottom'
            });
        toast.present();
    }
}