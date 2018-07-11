import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachesInfoPage } from './coaches-info';

@NgModule({
  declarations: [
    CoachesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachesInfoPage),
  ],
})
export class CoachesInfoPageModule {}
