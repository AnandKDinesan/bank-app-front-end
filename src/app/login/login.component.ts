import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="Your perfect banking Partner"
  data="Enter Account Number"
  // successMsg:booean''
  // acno=''
  // psw=''
  userDetails:any={1000:{acno:1000,username:"anu",password:123,balance:0},
  1001:{acno:1001,username:"amal",password:123,balance:0},
  1002:{acno:1002,username:"arun",password:123,balance:0},
  1003:{acno:1003,username:"mega",password:123,balance:0}}
constructor( private router :Router,private ds:DataService,private fb:FormBuilder){}
loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  login()
  {
    
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw
    
    if(this.loginForm.valid){
      this.ds.login(acno,psw).subscribe((result:any)=>{

        localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Invalid form')
    }
    

  }
  
  // login(a:any,b:any)
  // {
  //   this.acno=a.value
  //   this.psw=b.value

  //   var userDetails=this.userDetails
  //   var acno=this.acno
  //   var psw=this.psw
  //   if(acno in userDetails)
  //   {
  //     if(psw==userDetails[acno]["password"])
  //     {
  //       alert('Login Sussess!')
  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
     
  //   }
  //   else
  //   {
  //     alert('User not found')
  //   }
  // }
  // acnoChange(event:any){
  //   console.log(event.target.value);
    
  //   this.acno=event.target.value

  // }
  // pswChange(event:any){
  //   console.log(event.target.value);
    
  //   this.psw=event.target.value
    
  // }
}
