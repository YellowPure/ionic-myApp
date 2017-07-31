import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

// pages
import { FindPage } from '../pages/find/find';
import { CollectPage } from '../pages/collect/collect';
import { UsecenterPage } from '../pages/usecenter/usecenter';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginModal } from '../pages/loginModal/loginModal';
import { Protocol } from '../pages/protocol/protocol';
import { Detail } from '../pages/detail/detail';
import { Preview } from '../pages/preview/preview';
import { Search } from '../pages/search/search';
import { CommentPage } from '../pages/comment/comment';
import { WaterfallPage } from '../pages/waterfall/waterfall';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentModule } from '../components/components.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { LoginServiceProvider } from '../providers/login-service/login-service';


@NgModule({
  declarations: [
    MyApp,
    FindPage,
    CollectPage,
    HomePage,
    UsecenterPage,
    TabsPage,
    LoginModal,
    Protocol,
    Detail,
    Preview,
    Search,
    CommentPage,
    WaterfallPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    ComponentModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindPage,
    CollectPage,
    UsecenterPage,
    HomePage,
    TabsPage,
    LoginModal, // 登录弹窗
    Protocol, // 用户协议
    Detail, // 个人主页
    Preview,
    Search,
    CommentPage,
    WaterfallPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}
