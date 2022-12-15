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
    this.user = this.ds.currentuser

    //accessing date and time
    this.dateandtime=new Date()


  }
  ngOnInit():void {
    if(!localStorage.getItem('currentacno'))
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
    const result = this.ds.deposit(acno, psw, amnt)
    if (this.depositform.valid) {
      if (result) {
        alert(`${amnt} creadited to your account.Available balance is:${result}`)
      }
      else {
        alert('Incorrect Password')
      }
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
    const result = this.ds.withdraw(acno1, psw1, amount1)
    if (this.withdrawlform.valid) {
      if (result) {
        alert(`${amount1} debited from your account.Available balance is:${result}`)
      }
    }
    else {
      alert('Invalid Form')
    }



  }
  logout() {
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('')
  }
  deleteconfirm(){
    this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
  }
}
