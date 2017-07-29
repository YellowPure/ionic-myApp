import { Component, ViewChild } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController, ToastController, Header } from 'ionic-angular';

@Component({
    templateUrl: 'detail.html',
    selector: 'page-detail'
})
/**
 * 个人详情页
 */
export class Detail {
    isFollow: boolean =  false;

    @ViewChild(Header) header:Header;

    constructor(public aletCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

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
        let alert = this.aletCtrl.create({
            title: '联系方式',
            cssClass: 'phone',
            message: '<a href="//baidu.com">baidu</a>',
            buttons: [
                {
                    text: '不了',
                    handler: () => {

                    }
                },
                {
                    text: '689金币',
                    handler: () => {
                        
                    }
                }
            ]
        });
        alert.present();
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