import { Component } from '@angular/core';

import { FindPage } from '../find/find';
import { CollectPage } from '../collect/collect';
import { HomePage } from '../home/home';
import { UsecenterPage } from '../usecenter/usecenter';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = CollectPage;
  tab4Root = UsecenterPage;

  constructor() {

  }
}
