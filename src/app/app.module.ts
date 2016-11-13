import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HistoryPage,
    HomePage,
    TabsPage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
      AgmCoreModule.forRoot({apiKey: "AIzaSyCf4_tYh0DMPul0ewcyzdK9l5K_jNHDU9Y", libraries: ["places"]})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HistoryPage,
    HomePage,
    TabsPage,
    MapPage
  ],
  providers: []
})
export class AppModule {}
