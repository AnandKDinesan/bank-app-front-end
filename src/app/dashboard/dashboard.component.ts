import { Component } from '@angular/core';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno=''
  psw=''
  amnt=''
  acno1=''
  psw1=''
  amount1=''
  user=''
  constructor(private ds:DataService){
    this.user=this.ds.currentuser
  }
  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt
   const result=this.ds.deposit(acno,psw,amnt)
   if(result){
    alert(`${amnt} creadited to your account.Available balance is:${result}`)
   }
  else{
    alert('Incorrect Password')
  }

  }
  Withdraw(){
    
      var acno1=this.acno1
      var psw1=this.psw1
      var amount1=this.amount1
      const result=this.ds.withdraw(acno1,psw1,amount1)
      if(result)
      {
        alert(`${amount1} debited from your account.Available balance is:${result}`)
      }
      

  }
}
