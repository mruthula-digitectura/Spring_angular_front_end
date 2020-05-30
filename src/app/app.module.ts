import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import{UserModule} from './user/user.module';
import { HomeModule } from "./home/home.module";
import { SettingsModule }from './settings/settings.module';
import { RegisterationModule } from './registeration/registeration.module';
import { LightsModule } from './lights/lights.module';
import { GroupsModule } from './groups/groups.module';
import { LightDisplayModule } from './light-dashboard/light-dashboard.module';
import { GroupDashboardModule } from './group-dashboard/group-dashboard.module';
import { HttpClientModule } from "@angular/common/http";
import { WebService } from './services/web.service';
import { GroupWebServiceService } from 'src/app/services/group-web-service.service';
import { LoginWebService } from 'src/app/services/login-web.service';
import {UserWebService} from 'src/app/services/user-web.service';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from './home/home-page/home-page.component';
import {MatInputModule,MatButtonModule} from '@angular/material';
import { UserLightDashboardModule } from './user-light-dashboard/user-light-dashboard.module';
import { UserGroupDashboardModule } from './user-group-dashboard/user-group-dashboard.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    HomeModule,
    SettingsModule,
    RegisterationModule,
    LightsModule,
    GroupsModule,
    MatButtonModule,
    LightDisplayModule,
    GroupDashboardModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomePageComponent
      },{
        path:'login',
        component:LoginComponent
      },{
        path:'admin',
        component:LoginPageComponent
      }
    ]),
    UserLightDashboardModule,
    UserGroupDashboardModule
  ],
  providers: [WebService,GroupWebServiceService,LoginWebService,UserWebService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
