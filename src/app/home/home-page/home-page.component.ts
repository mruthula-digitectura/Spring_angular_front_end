import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ɵROUTER_PROVIDERS}from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private _router: Router )
  {
  }

  settingsClick(){

    this._router.navigate(['/settings']);
  }


  lightingClick()
  {
    this._router.navigate(['/lightdashboard']);
  }


  groupClick()
  {
    this._router.navigate(['/groupDashboard']);

  }
  ngOnInit(): void {
   
  }
}
