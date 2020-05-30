import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationPageComponent } from './registeration-page/registeration-page.component';
import {/* MatFormFieldModule, MatInputModule,*/ MatSelectModule } from 
   '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterationPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[RegisterationPageComponent]
})
export class RegisterationModule { }
