import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import {Router}from '@angular/router';
import{ LogInDetailsTable } from 'src/app/interface/log-in-details-table';
import{ LoginWebService } from 'src/app/services/login-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    // this.createForm();
   
  }
  // url: string = 'logInDetails_table';
  
  // loginList: Array<LogInDetailsTable>
  // logInDetailsTable: LogInDetailsTable = undefined
  // myForm: FormGroup;
  // selectedUser_type:String;
  // selectedPassword:String;
  // selectedUser_name:String;
  // userType:String;
  // userName:string;
  // password:string;

  constructor(private loginWebService: LoginWebService, private formBuilder: FormBuilder, private _router: Router ) { }


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

  

  
  

  onLoginClick(){
    this._router.navigate(['/home-page']);
  }
  
  
  
}
