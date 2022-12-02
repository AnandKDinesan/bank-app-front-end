import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="Your perfect banking Partner"
  data="Enter Account Number"
  acno=''
  psw=''
  userDetails:any={1000:{acno:1000,username:"anu",password:123,balance:0},
  1001:{acno:1001,username:"amal",password:123,balance:0},
  1002:{acno:1002,username:"arun",password:123,balance:0},
  1003:{acno:1003,username:"mega",password:123,balance:0}}

  login()
  {
    alert('Login clicked')
  }
  acnoChange(event:any){
    console.log(event.target.value);
    
    this.acno=event.target.value

  }
  pswChange(event:any){
    console.log(event.target.value);
    
    this.psw=event.target.value
    
  }
}
