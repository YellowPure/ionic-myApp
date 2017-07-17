import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { FindPage } from '../find/find';
import { CollectPage } from '../collect/collect';
import { HomePage } from '../home/home';
import { UsecenterPage } from '../usecenter/usecenter';


@Component({
  templateUrl: 'tabs.html',
  selector: 'bottom-tabs'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = CollectPage;
  tab4Root = UsecenterPage;

  constructor() {

  }
}
