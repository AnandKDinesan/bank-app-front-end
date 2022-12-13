import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''
  // acno1=''
  // psw1=''
  // amount1=''
  user=''
  constructor(private ds:DataService,private fb:FormBuilder){
    this.user=this.ds.currentuser
  }
depositform=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  deposit(){
    var acno=this.depositform.value.acno
    var psw=this.depositform.value.psw
    var amnt=this.depositform.value.amnt
   const result=this.ds.deposit(acno,psw,amnt)
   if(this.depositform.valid)
   {
    if(result){
      alert(`${amnt} creadited to your account.Available balance is:${result}`)
     }
    else{
      alert('Incorrect Password')
    }
   }
   else{
    alert('Invalid form')
   }
   

  }
  withdrawlform=this.fb.group({acno1:[,[Validators.required,Validators.pattern('[0-9]+')]],
  psw1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  Withdraw(){
    
      var acno1=this.withdrawlform.value.acno1
      var psw1=this.withdrawlform.value.psw1
      var amount1=this.withdrawlform.value.amount1
      const result=this.ds.withdraw(acno1,psw1,amount1)
      if(this.withdrawlform.valid){
        if(result)
      {
        alert(`${amount1} debited from your account.Available balance is:${result}`)
      }
      }
      else{
        alert('Invalid Form')
      }
      
      

  }
}
