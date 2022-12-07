import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // database: any = {
  //   // 1000: { acno: 1000, uname: "mubashir", password: 1000, balance: 100000 }
  // }
  
  abc: any = "WELCOME TO HDFC BANK"
  acc: any = "Enter your acc.no"
  pass: any = "Enter your pass"
  accountnumber: any
  pswd1: any = ""
  username: any
  constructor(private route: Router, private database: AuthserviceService) { }

  ngOnInit(): void {
  }


  login() {
    var acno: any = this.accountnumber
    var pswd: any = this.pswd1
    this.database.login(acno, pswd)
      .subscribe((result: any) => {
        alert(result.message)

        localStorage.setItem("currentAccountNumber", JSON.stringify(result.currentacno))
        localStorage.setItem("currentName", JSON.stringify(result.currentname))
        localStorage.setItem("token", JSON.stringify(result.token))
        this.route.navigateByUrl('dashboard')

      }, (result: any) => {
        alert(result.error.message)
      })
  }


  // acnochange(event: any){
  //   console.log(event)
  //   console.log("input:", event.target.value)
  //   this.accountnumber = event.target.value
  // }
  // passwordchange(event:any){

  //   this.pswd1=event.target.value

  // }

}