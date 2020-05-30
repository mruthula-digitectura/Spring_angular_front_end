import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { UserDetailsTable } from "src/app/interface/user-details-table";
import { UserWebService } from "src/app/services/user-web.service";
import { } from 'src/app/registeration/registeration.module';
@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css']
})
export class RegisterationPageComponent implements OnInit {

  ngOnInit(): void {
    // this.createForm();
    this.getData();
  }
  url: string = 'user-details-table';
  deleteUrl:string='user-details-table/delete-user';
  firstName: any;
  lastName: any;
  userName: any;
  password: any;
  userId: any;
  userType: any;
  flag: boolean = false;

  selectGroup: any;

  groupIdAndName = [{ "id": 22, "name": "pantry " }, { "id": 23, "name": "conference room" }, { "id": 24, "name": " board room" }];
  checkGroup() {
    console.log("inside")
    console.log(this.selectGroup);

  }

  selectLight: any;



  lightIdAndName = [{ "id": 100, "name": "pantry light1" }, { "id": 112, "name": "pantry light2" }, { "id": 113, "name": "pantry light3" }, { "id": 114, "name": "conf room light1" }, { "id": 5, "name": "conf room light2" }];

  checkLight() {
    console.log("inside")
    console.log(this.selectLight);

  }


  userList: any;
  userDetailsTable: any;
  // myForm: FormGroup;

  constructor(private userWebService: UserWebService, private formBuilder: FormBuilder) { }


  // private createForm() {
  //   this.myForm = this.formBuilder.group({
  //     firstName: new FormControl(this.userDetailsTable ? this.userDetailsTable.firstName : '', Validators.required),
  //     lastName: new FormControl(this.userDetailsTable ? this.userDetailsTable.lastName : '', Validators.required),
  //     userName: new FormControl(this.userDetailsTable ? this.userDetailsTable.userName : '', Validators.required),
  //     userType: new FormControl(this.userDetailsTable ? this.userDetailsTable.password : '', Validators.required),
  //     password: new FormControl(this.userDetailsTable ? this.userDetailsTable.password : '', Validators.required)




  //   });
  // }
  // private submitForm(data: FormGroup) {
  //   if (data.valid)
  //     this.addUser(data.value)
  // }

  getData(): void {
    console.log("Inside");
    this.userWebService.get(this.url).subscribe(res => {
      // let response = JSON.parse(JSON.stringify(res))
      console.log(res);
      this.userList = res
    })
    console.log(this.userList);
  }

  // addUser(userDetailsTable: UserDetailsTable): void {
  //   if (this.userDetailsTable)
  //   userDetailsTable.user_id = this.userDetailsTable.user_id
  //   this.userWebService.post(this.url, userDetailsTable).subscribe(res => {
  //     let response = JSON.parse(JSON.stringify(res))
  //     this.getData()
  //     this.myForm.reset()
  //     this.userDetailsTable = undefined
  //   }, error => {
  //   })
  // }

  // edit(userDetailsTable: UserDetailsTable): void {
  //   this.userDetailsTable = userDetailsTable
  //   this.myForm.controls['firstName'].setValue(this.userDetailsTable.firstName)
  //   this.myForm.controls['lastName'].setValue(this.userDetailsTable.lastName)
  //   this.myForm.controls['userName'].setValue(this.userDetailsTable.userName)
  //   this.myForm.controls['password'].setValue(this.userDetailsTable.password)
  //   this.myForm.controls['userType'].setValue(this.userDetailsTable.userType)



  // }
  edit(userDetailsTable: UserDetailsTable): void {
    this.flag = true;
    this.firstName = userDetailsTable.firstName;
    this.userType=userDetailsTable.userType;
    this.lastName=userDetailsTable.lastname;
    this.password=userDetailsTable.password;
    this.userName=userDetailsTable.userName;
    this.userId = userDetailsTable.userId;
    // usergroupIdList: userDetailsTable.selectGroup,
    // userlightIdList:userDetailsTable .selectLight,

    // let temp = {
    //   userId: userDetailsTable.userId,
    //   userName: userDetailsTable.userName,
    //   firstName: userDetailsTable.firstName,
    //   lastName: userDetailsTable.lastName,
    //   password: userDetailsTable.password,
    //   userType: userDetailsTable.userType,
    // usergroupIdList: userDetailsTable.selectGroup,
    // userlightIdList:userDetailsTable .selectLight,

    // };
    // console.log(temp);

  }

  delete(userDetailsTable: UserDetailsTable): void {
    console.log(userDetailsTable);
    
    this.userWebService.post(this.deleteUrl, userDetailsTable).subscribe(res => {
      //     let data = JSON.parse(JSON.stringify(res))
      
    }, error => {
    })
    
    this.getData();
    
  }



  createUser() {


    //debugger
    let temp = {
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      userType: this.userType,
      usergroupIdList: this.selectGroup,
      userlightIdList: this.selectLight,

    };


    console.log(temp);

    this.userWebService.post(this.url, temp).subscribe(res => {

    }, error => {
    })
    this.getData();

  }

  createNewUser() {
    this.flag = false;


  }
  editUser() {
    //debugger
    let temp = {
      userId: this.userId,
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      userType: this.userType,
      usergroupIdList: this.selectGroup,
      userlightIdList: this.selectLight,

    };


    console.log(temp);

    this.userWebService.put(this.url, temp).subscribe(res => {

    }, error => {
    })

    this.getData();
  }
  saveUser() {
    if (this.flag) {
      this.editUser();
    } else {
      this.createUser();
    }
    // this.getData();
  }
   
}
