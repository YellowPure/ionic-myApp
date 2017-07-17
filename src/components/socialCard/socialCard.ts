import { Component, Input } from '@angular/core';
import { 
    NavController,
    ActionSheetController,
    AlertController,
    ToastController
} from 'ionic-angular';
import { Preview } from '../../pages/preview/preview';
import { CommentPage } from '../../pages/comment/comment';

import Mock from 'mockjs';

@Component({
    selector: 'social-card',
    templateUrl: 'socialCard.html'
})
export class SocialCard {
    public items = [];
    @Input()
    type: number;
    
    src1: string = 'http://dummyimage.com/120x60';
    src2: string = 'http://dummyimage.com/120x60';
    src3: string = 'http://dummyimage.com/120x60';

    avator: string;
    islike: boolean = false;
    likeIcon: string = 'thumbs-up-outline';

    constructor(
        public navCtrl: NavController,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController
    ) {
        this.avator = Mock.mock({'img': '@image'}).img;
    }

    ngOnInit() {
        const arr = Array.from({length: 9});
        if(this.type == 0) {
            this.items = arr.map(() => this.src1);
        } else if(this.type == 1) {
            this.items = arr.map(() => this.src2);
        } else if(this.type == 2) {
            this.items = arr.map(() => this.src3);
        }
    }

    toPreview() {
        let ran = Math.random() > .5 ? 2 : 1;
        // console.log(ran);
        this.navCtrl.push(Preview, {
            type: ran,
            allow: ran == 1 ? false : true
        });
    }

    tapMore($event) {
        let act = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '举报',
                    role: 'destructive',
                    handler: () => {

                    }
                },
                {
                    text: '分享',
                    handler: () => {

                    }
                },
                {
                    text: '收录至频道',
                    handler: () => {

                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        
                    }
                }
            ]
        });
        act.present();
    }

    toast() {
        let toast = this.toastCtrl.create({
            message: '金币不足',
            showCloseButton: true,
            cssClass: 'need-recharge',
            closeButtonText: '关闭',
            duration: 1500
        });
        toast.present();
    }

    // 关注
    follow($event) {
        let prompt = this.alertCtrl.create({
            title: '需要999金币',
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
                        this.toast();
                    }
                }
            ]
        });
        prompt.present();
    }

    // 去评论页
    toComment() {
        this.navCtrl.push(CommentPage, {

        });
    }

    // 喜欢
    like() {
        this.islike = true;
        this.likeIcon = 'thumbs-up';
    }

    // 下载
    download() {
        let prompt = this.alertCtrl.create({
            title: '需要999金币',
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
                        this.toast();
                    }
                }
            ]
        });
        prompt.present();
    }
}
