import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import {Router}from '@angular/router';
import{ LogInDetailsTable } from 'src/app/interface/log-in-details-table';
import{ LoginWebService } from 'src/app/services/login-web.service';
import { UserWebService } from '../services/user-web.service';
import{VarService} from 'src/var.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  ngOnInit(): void {
    // this.createForm();
    this.getData();
  }
   url: string = 'user-details-table/login';
  userName:any;
  password:any;
  userList:any;
  selectUserName:any;
  selectPassword:any;
  selectUserType:any;
  // loginList: Array<LogInDetailsTable>
  // logInDetailsTable: LogInDetailsTable = undefined
  // myForm: FormGroup;
  // selectedUser_type:String;
  // selectedPassword:String;
  // selectedUser_name:String;
  // userType:String;
  // userName:string;
  // password:string;

  constructor(private userWebService: UserWebService, private formBuilder: FormBuilder, private _router: Router ,private varService: VarService) { }


  // private createForm() {
  //   this.myForm = this.formBuilder.group({
  //     userType: new FormControl(this.logInDetailsTable ? this.logInDetailsTable.user_type : '', Validators.required),
  //     userName: new FormControl(this.logInDetailsTable ? this.logInDetailsTable.user_name : '', Validators.required),
  //     password: new FormControl(this.logInDetailsTable ? this.logInDetailsTable.password : '', Validators.required),
      
  //   });
  // }
  // private submitForm(data: FormGroup) {
  //   if (data.valid)
  //     this.getData()
  // }

  // getData(): void {
  //   this.userType=this.myForm.get('userType').value;
  //   this.userName=this.myForm.get('userName').value;
  //   this.password=this.myForm.get('password').value;

  //   this.loginWebService.get(this.url).subscribe(res => {
  //     let response = JSON.parse(JSON.stringify(res))
  //     this.loginList = response.data;
  //     this.selectedPassword = this.loginList[0].password;
  //     this.selectedUser_name = this.loginList[1].user_name;
  //     this.selectedUser_type = this.loginList[2].user_type;

  //   })
  //    if((this.userType===this.selectedUser_type)&&(this.userName===this.selectedUser_name)&&(this.password===this.selectedPassword))
  //    this._router.navigate(['/home']);
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

  
  

  onLoginClick(){

    userName:this.userName;
    password:this.password;
    console.log(this.userName);
    console.log(this.password);
    console.log(this.userList);

    // if((this.userName=="admin")&&(this.password=="admin123"))
    // {
    //   this._router.navigate(['/user-page']);
    // }
    // else{
    //   console.log("invalid");
    // }

    for (let user of this.userList)
    {  
      this.selectUserName=user.userName;
      this.selectPassword=user.password;
      this.selectUserType=user.userType;
     // this.userId=user.userId;
      //  console.log(this.selectUserName);
      //  console.log(this.userId);
      if((this.userName==this.selectUserName)&&(this.password==this.selectPassword)&&(this.selectUserType==1))
      {
        this._router.navigate(['/home-page']);

      }
      else 
      {
        if((this.userName==this.selectUserName)&&(this.password==this.selectPassword)&&(this.selectUserType==0))
        {
          this.varService.userId=user.userId;
          console.log(this.varService.userId);
          this._router.navigate(['/user-page']);
        }
        else
        {
             console.log("invalid");
        }
      }
      


    }
    
    
  }
  

}
