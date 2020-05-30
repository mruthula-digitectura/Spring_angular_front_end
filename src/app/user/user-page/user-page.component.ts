import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ɵROUTER_PROVIDERS}from '@angular/router';
import{LoginPageComponent} from 'src/app/login-page/login-page.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
 userName:any;
  
  constructor(private _router: Router) {

     
  //  let userName=loginPageComponent.userName;
   }
  
  ngOnInit() {
    
  }
  lightingClick()
  {
    this._router.navigate(['/userLightdashboard']);
  }

  groupClick()
  {
    this._router.navigate(['/userGroupDashboard']);

  }

}
