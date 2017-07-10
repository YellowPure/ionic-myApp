import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Mock from 'mockjs';

@Component({
    selector: 'head-list',
    templateUrl: 'headList.html'
})
export class HeadList {
    headlist: any;
    constructor(public navCtrl: NavController) {
        this.headlist = Mock.mock({
            'list|1-10': [{
                'id|+1': 1,
                'src': '@image',
                'title': '@cname'
            }]
        }).list;
    }

    ngOnInit() {

    }
}
