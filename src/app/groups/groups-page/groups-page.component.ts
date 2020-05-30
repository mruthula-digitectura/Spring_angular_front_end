import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { GroupTable } from 'src/app/interface/group-table';
import { GroupWebServiceService } from 'src/app/services/group-web-service.service';
import { } from 'src/app/groups/groups.module';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})

export class GroupsPageComponent implements OnInit {

  ngOnInit(): void {

    // this.createForm();
     this.getData();
  }

  selectLight: any;
  groupId: any;
  groupName: any;
  flag: boolean = false;
 
  lightIdAndName = [{ "id": 100, "name": "pantry light1" }, { "id": 112, "name": "pantry light2" }, { "id": 113, "name": "pantry light3" }, { "id": 114, "name": "conf room light1" }, { "id": 119, "name": "board light1" }];

  // lightList: string[] = [' pantry light1', 'pantry light2', 'pantry light3', 'con room light1', 'conf room light2', 'conf room light3'];
  // toppings = new FormControl();
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  check() {
    console.log("inside")
    console.log(this.selectLight);
   
  }

  url: string = 'group-table';
  deleteUrl:string='group-table/delete-group';
   groupList: any;

  // groupTable: GroupTable = undefined
  // myForm: FormGroup;

  constructor(private groupWebServiceService: GroupWebServiceService, private formBuilder: FormBuilder) { }


  // private createForm() {
  //   this.myForm = this.formBuilder.group({
  //     groupName: new FormControl(this.groupTable ? this.groupTable.groupName : '', Validators.required),
  //     lightIdList: new FormControl(this.groupTable ? this.groupTable.lightIdList : '', Validators.required)


  //   });
  // }
  // private onSubmit(data: FormGroup) {
  //   if (data.valid)
  //     this.addGroup(data.value)
  // }

   getData(): void {
    console.log("Inside");
    this.groupWebServiceService.get(this.url).subscribe(res => {
  // let response = JSON.parse(JSON.stringify(res))
        console.log(res);
      this.groupList = res
    })
  console.log(this.groupList);
   }

  // addGroup(groupTable: GroupTable): void {
  //   if (this.groupTable)
  //     groupTable.groupId = this.groupTable.groupId
  //   this.groupWebServiceService.post(this.url, groupTable).subscribe(res => {
  //     let response = JSON.parse(JSON.stringify(res))
  //     this.getData()
  //     this.myForm.reset()
  //     this.groupTable = undefined
  //   }, error => {
  //   })
  // }

   edit(groupTable: GroupTable): void {
    this.flag = true;
    this.groupName = groupTable.groupName;
    
    this.groupId = groupTable.groupId;

   }

   delete(groupTable: GroupTable): void {
     this.groupWebServiceService.post(this.deleteUrl, groupTable).subscribe(res => {
  //     let data = JSON.parse(JSON.stringify(res))
  //     this.getData()
     }, error => {
    })
    this.getData();
   }

  createGroup() {
    
    let temp = {
      groupName: this.groupName,
      lightIdList: this.selectLight
    }


    console.log(temp);
    this.groupWebServiceService.post(this.url, temp).subscribe(res => {
      
        }, error => {
        })
        this.getData();
  }

  editGroup()
  {
    let temp = {
      groupId:this.groupId,
      groupName: this.groupName,
      lightIdList: this.selectLight
    }
    console.log(temp);
    this.groupWebServiceService.put(this.url, temp).subscribe(res => {
      
        }, error => {
        })
        this.getData();
  }

 saveGroup()
   { 
      if(this.flag){
        this.editGroup();
      }

      else {
        this.createGroup();
      }
  
   }
 

}
