import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDashboardPageComponent } from './group-dashboard-page/group-dashboard-page.component';



@NgModule({
  declarations: [GroupDashboardPageComponent],
  imports: [
    CommonModule
  ],
  exports :[GroupDashboardPageComponent]
})
export class GroupDashboardModule { }
