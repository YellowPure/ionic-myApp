import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../app/app.component';
import {SocialCard} from './socialCard/socialCard';
import {HeadIcon} from './headIcon/headIcon';
import {HeadList} from './headList/headList';
import {CategoryList} from './categoryList/categoryList';

@NgModule({
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    declarations: [SocialCard, HeadIcon, CategoryList, HeadList],
    exports: [SocialCard, HeadIcon, CategoryList, HeadList],
    providers: []
})

export class ComponentModule {

}