import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { LightTable } from 'src/app/interface/light-table';
import { WebService } from 'src/app/services/web.service';


@Component({
  selector: 'app-lights-page',
  templateUrl: './lights-page.component.html',
  styleUrls: ['./lights-page.component.css']
})
export class LightsPageComponent implements OnInit {

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }
  url: string = 'light-table';
  
  lightList: Array<LightTable>
  lightTable: LightTable = undefined
  myForm: FormGroup;

  constructor(private webService: WebService, private formBuilder: FormBuilder) { }


  private createForm() {
    this.myForm = this.formBuilder.group({
      lightName: new FormControl(this.lightTable ? this.lightTable.lightName : '', Validators.required),
      
    });
  }
  private submitForm(data: FormGroup) {
    if (data.valid)
      this.addLight(data.value)
  }

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.lightList = response.data
    })
  }

  addLight(lightTable: LightTable): void {
    if (this.lightTable)
    lightTable.light_id = this.lightTable.light_id
    this.webService.post(this.url, lightTable).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.lightTable = undefined
    }, error => {
    })
  }

  edit(lightTable: LightTable): void {
    this.lightTable = lightTable
    this.myForm.controls['lightName'].setValue(this.lightTable.lightName)
    
  }

  delete(lightTable: LightTable): void {
    this.webService.delete(this.url, lightTable).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }

}
