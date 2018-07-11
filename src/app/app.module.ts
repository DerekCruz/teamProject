import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageBoardPage } from '../pages/message-board/message-board';
import { CoachesInfoPage } from '../pages/coaches-info/coaches-info';
import { ComformationPage } from '../pages/comformation/comformation';
import { ComformationDatePage } from '../pages/comformation-date/comformation-date';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessageBoardPage,
    CoachesInfoPage,
    ComformationPage,
    ComformationDatePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessageBoardPage,
    CoachesInfoPage,
    ComformationPage,
    ComformationDatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
