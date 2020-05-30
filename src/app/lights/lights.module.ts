import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightsPageComponent } from './lights-page/lights-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [LightsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[LightsPageComponent]
})
export class LightsModule { }
