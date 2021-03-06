import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// PAGES
import { HomePage } from '../pages/home/home';
import { MessageBoardPage } from '../pages/message-board/message-board';
import { CoachesInfoPage } from '../pages/coaches-info/coaches-info';
import { ComformationPage } from '../pages/comformation/comformation';
import { ComformationDatePage } from '../pages/comformation-date/comformation-date';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MethodLearningPage } from '../pages/method-learning/method-learning';
import { FolderPage } from '../pages/folder/folder';

//DEPENDENCIES
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';

import { LocalNotifications } from '../../node_modules/@ionic-native/local-notifications';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessageBoardPage,
    CoachesInfoPage,
    ComformationPage,
    ComformationDatePage,
    SignUpPage,
    MethodLearningPage,
    FolderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessageBoardPage,
    CoachesInfoPage,
    ComformationPage,
    ComformationDatePage,
    SignUpPage,
    MethodLearningPage,
    FolderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
