import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//others
import {/* MatFormFieldModule, MatInputModule,*/ MatSelectModule } from 
   '@angular/material';


@NgModule({
  declarations: [GroupsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // MatInputModule,
    // MatFormFieldModule,
    MatSelectModule
  ],
  exports:[GroupsPageComponent]
})
export class GroupsModule { }
