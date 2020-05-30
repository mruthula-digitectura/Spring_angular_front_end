import { Component, OnInit } from '@angular/core';
import { UserWebService } from 'src/app/services/user-web.service';
import { VarService } from 'src/var.service';

@Component({
  selector: 'app-user-group-dashboard-page',
  templateUrl: './user-group-dashboard-page.component.html',
  styleUrls: ['./user-group-dashboard-page.component.css']
})
export class UserGroupDashboardPageComponent implements OnInit {

  url: string = 'user-details-table/group-display';
  groupList:any;
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
      this.groupList = res.groupName;
    })
    console.log(this.groupList);
  }
}
