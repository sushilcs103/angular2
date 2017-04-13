import { Component } from '@angular/core';
import { LocationPage } from '../location/location';
import { MenuPage } from '../menu/menu';
import { FavouritePage } from '../favourite/favourite';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationPage;
  tab2Root = MenuPage;
  tab3Root = FavouritePage;
  tab4Root = HistoryPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
