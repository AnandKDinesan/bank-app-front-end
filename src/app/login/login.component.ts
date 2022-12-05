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

  // login()
  // {
  //   // var userDetails=this.userDetails
  //   // var acno=this.acno
  //   // var psw=this.psw
  //   // if(acno in userDetails)
  //   // {
  //   //   if(psw==userDetails[acno]["password"])
  //   //   {
  //   //     alert('Login Sussess!')
  //   //   }
  //   //   else{
  //   //     alert('Incorrect password')
  //   //   }
     
  //   // }
  //   // else
  //   // {
  //   //   alert('User not found')
  //   // }


  // }
  
  login(a:any,b:any)
  {
    this.acno=a.value
    this.psw=b.value

    var userDetails=this.userDetails
    var acno=this.acno
    var psw=this.psw
    if(acno in userDetails)
    {
      if(psw==userDetails[acno]["password"])
      {
        alert('Login Sussess!')
      }
      else{
        alert('Incorrect password')
      }
     
    }
    else
    {
      alert('User not found')
    }
  }
  // acnoChange(event:any){
  //   console.log(event.target.value);
    
  //   this.acno=event.target.value

  // }
  // pswChange(event:any){
  //   console.log(event.target.value);
    
  //   this.psw=event.target.value
    
  // }
}
