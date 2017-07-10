import { Component } from '@angular/core';
import { ActionSheetController, LoadingController, ToastController } from 'ionic-angular';

@Component({
    templateUrl: 'detail.html',
    selector: 'page-detail'
})
/**
 * 个人详情页
 */
export class Detail {
    isFollow: boolean =  false;
    constructor(public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    }

    ngOnInit() {

    }

    more() {
        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '复制主页链接',
                    handler: () => {

                    }
                },
                {
                    text: '拉黑',
                    role: 'destructive',
                    handler: () => {}
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {}
                }
            ]
        });
        actionSheet.present();
    }

    getPhone() {

    }

    presentLoading() {
        let loading = this.loadingCtrl.create({
            duration: 1000,
            content: 'loading...'
        });
        loading.present();
    }

    toast() {
        let toast = this.toastCtrl.create({
            duration: 2000,
            message: this.isFollow == true ? '关注成功': '取消关注成功'
        });
        toast.present();
    }

    follow() {
        this.presentLoading();
        setTimeout(() => {
            this.isFollow = !this.isFollow;
            this.toast();
        }, 1000);
    }
}