import { Component, OnInit } from '@angular/core';
import { GroupWebServiceService } from 'src/app/services/group-web-service.service';

@Component({
  selector: 'app-group-dashboard-page',
  templateUrl: './group-dashboard-page.component.html',
  styleUrls: ['./group-dashboard-page.component.css']
})
export class GroupDashboardPageComponent implements OnInit {


  url: string = 'group-table';
  groupList: any;
  constructor(private groupWebServiceService: GroupWebServiceService) { }

  ngOnInit() {

    this.getData();
  }
  getData(): void {
    console.log("Inside");
    this.groupWebServiceService.get(this.url).subscribe(res => {
  // let response = JSON.parse(JSON.stringify(res))
        console.log(res);
      this.groupList = res
    })
  console.log(this.groupList);
   }
}
