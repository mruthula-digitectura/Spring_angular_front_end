import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page/settings-page.component';
// import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule
  ],
  exports:[SettingsPageComponent]
})
export class SettingsModule { }
