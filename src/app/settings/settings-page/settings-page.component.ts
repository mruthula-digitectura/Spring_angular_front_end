import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ɵROUTER_PROVIDERS}from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
  
})
export class SettingsPageComponent implements OnInit {

  constructor(private _router: Router )
  {
  }

  onCreateUserClick(){

    this._router.navigate(['/createUser']);
  }


  onCreateLightClick()
  {
    this._router.navigate(['/createLight']);
  }


  onCreateGroupLClick()
  {
    this._router.navigate(['/createGroup']);

  }
  ngOnInit(): void {
   
  }
  
  
  

}
