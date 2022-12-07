import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

const options={
  headers:new HttpHeaders
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dacno:any
  dpassword:any
  damount:any


  wacno:any
  wpassword:any
  wamount:any

  constructor(private db:AuthserviceService,private http:HttpClient,private root:Router) { }
 

  ngOnInit(): void {
    if(!localStorage.getItem('currentAccountNumber')){
      alert('please login again')
      this.root.navigateByUrl("")
    }
  }
  
  getOptions(){
    var token=JSON.parse(localStorage.getItem('token')||'')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }
  depo() {
    var acno=this.dacno
    var password=this.dpassword
    var amount=this.damount


    const body={
      acno,
      password,
      amount
    }
    this.http.post('http://localhost:3400/deposite',body,this.getOptions())
    .subscribe((result:any)=>{
      alert(result.message)
    },(result)=>{
      alert(result.error.message)
    })
  }

withdraw(){
  var acno=this.wacno
  var password=this.wpassword
  var amount=this.wamount


  const body={
    acno,
    password,
    amount
  }
  this.http.post('http://localhost:3400/withdraw',body,this.getOptions())
    .subscribe((result:any)=>{
      alert(result.message)
    },(result)=>{
      alert(result.error.message)
    })
  }


}


