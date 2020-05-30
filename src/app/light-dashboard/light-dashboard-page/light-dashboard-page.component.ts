import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { LightTable } from 'src/app/interface/light-table';

@Component({
  selector: 'app-light-display-page',
  templateUrl: './light-dashboard-page.component.html',
  styleUrls: ['./light-dashboard-page.component.css']
})
export class LightDisplayPageComponent implements OnInit {
  url: string = 'light-table';
  lightList: Array<LightTable>
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.lightList = response.data
    })
  }
}
