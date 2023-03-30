import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno:any
  // psw=''
  // amnt=''
  // acno1=''
  // psw1=''
  // amount1=''
  user = ''
  dateandtime:any
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    //accessing user name
    if(localStorage.getItem('currentuser'))
    this.user = JSON.parse(localStorage.getItem('currentuser') || '')

    //accessing date and time
    this.dateandtime=new Date()


  }
  ngOnInit():void {
    if(!localStorage.getItem('token'))
    {
      alert('Please login first')
      this.router.navigateByUrl('')
    }
  }
  depositform = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  deposit() {
    var acno = this.depositform.value.acno
    var psw = this.depositform.value.psw
    var amnt = this.depositform.value.amnt
     
    if (this.depositform.valid) {
      this.ds.deposit(acno, psw, amnt).subscribe((result:any)=>{
        alert(`${amnt} is credited to your account.Available balance is:${result.message}`)
       },
       result=>{
        alert(result.error.message)
       })
    }
    else {
      alert('Invalid form')
    }


  }
  withdrawlform = this.fb.group({
    acno1: [, [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  Withdraw() {

    var acno1 = this.withdrawlform.value.acno1
    var psw1 = this.withdrawlform.value.psw1
    var amount1 = this.withdrawlform.value.amount1
     
    if (this.withdrawlform.valid) {
      this.ds.withdraw(acno1, psw1, amount1).subscribe((result:any)=>{
        alert(`${amount1} is credited to your account.Available balance is:${result.message}`)
     },
     result=>{
      alert(result.error.message)
     })
    }
    else {
      alert('Invalid Form')
    }



  }
  logout() {
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
  deleteconfirm(){
    this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
  }
  oncancel(){
    this.acno=""
  }
  delete(event:any){
  // alert(event)
  this.ds.deleteacc(event).subscribe((result:any)=>{
    alert(result.message)

    this.logout()
  },
  result=>{
    alert(result.error.message)
  })

  }
}
