import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentModule } from '../components/components.module';

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
    Search
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    ComponentModule
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
    Search
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
