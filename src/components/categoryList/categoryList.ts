import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'category-list',
    templateUrl: 'categoryList.html'
})
export class CategoryList {
    @Output() changeSegment:EventEmitter<string> = new EventEmitter(); 
    public lookType: string = 'lookin';

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {
        console.log(this.lookType);
    }

    segmentChanged($event) {
        this.changeSegment.emit(this.lookType);
    }
}
