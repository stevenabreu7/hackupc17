import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = DashboardPage;
  tab3Root = DashboardPage;

  constructor() {

  }
}
