import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomePageComponent} from './home/home-page/home-page.component';
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { RegisterationPageComponent } from './registeration/registeration-page/registeration-page.component';
import { LightsPageComponent } from './lights/lights-page/lights-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GroupsPageComponent } from './groups/groups-page/groups-page.component';
import { LightDisplayPageComponent } from './light-dashboard/light-dashboard-page/light-dashboard-page.component';
import { GroupDashboardPageComponent } from './group-dashboard/group-dashboard-page/group-dashboard-page.component';
import {UserPageComponent} from './user/user-page/user-page.component';
import{UserLightDashboardPageComponent} from './user-light-dashboard/user-light-dashboard-page/user-light-dashboard-page.component';
import {UserGroupDashboardPageComponent} from './user-group-dashboard/user-group-dashboard-page/user-group-dashboard-page.component';
const routes: Routes = [
  {path:'user-page', component: UserPageComponent},
  {path:'userLightdashboard', component: UserLightDashboardPageComponent},
  {path:'userGroupDashboard', component: UserGroupDashboardPageComponent},
  { path: 'home-page', component: HomePageComponent},
  {path :'settings', component:SettingsPageComponent},
  { path: 'createUser', component : RegisterationPageComponent},
  { path: 'createLight', component : LightsPageComponent},
  { path: "", component: LoginPageComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: 'createGroup', component : GroupsPageComponent},
  { path: 'lightdashboard', component : LightDisplayPageComponent},
  { path: 'groupDashboard', component : GroupDashboardPageComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes);
