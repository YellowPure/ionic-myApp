import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Preview } from '../../pages/preview/preview';

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

    constructor(public navCtrl: NavController) {
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
}