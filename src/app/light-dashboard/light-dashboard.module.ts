import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightDisplayPageComponent } from './light-dashboard-page/light-dashboard-page.component';



@NgModule({
  declarations: [LightDisplayPageComponent],
  imports: [
    CommonModule
  ],
  exports :[LightDisplayPageComponent]
})
export class LightDisplayModule { }
