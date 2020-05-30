import { Component, OnInit } from '@angular/core';
import { UserWebService } from 'src/app/services/user-web.service';
import { VarService } from 'src/var.service';

@Component({
  selector: 'app-user-light-dashboard-page',
  templateUrl: './user-light-dashboard-page.component.html',
  styleUrls: ['./user-light-dashboard-page.component.css']
})
export class UserLightDashboardPageComponent implements OnInit {


  url: string = 'user-details-table/light-display';
  lightList:any;
  constructor(private userWebService: UserWebService,private varService: VarService) { }

  ngOnInit() {

    this.getData();
  }

  getData()
  {

    let temp = {

      userId:this.varService.userId,

    };
    console.log("im here");
    this.userWebService.post(this.url, temp).subscribe(res => {
      // let response = JSON.parse(JSON.stringify(res))
      console.log(res);
      this.lightList = res.lightName;
    })
    console.log(this.lightList);
  }

}
