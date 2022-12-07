import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  datenew=new Date()
  constructor(private http:HttpClient) { }
  transaction:any = []
  balance:any

  ngOnInit(): void {
    var acno=JSON.parse(localStorage.getItem('currentAccountNumber') ||"")
    this.http.post("http://localhost:3400/transaction",{
      "acno":acno
    })
    .subscribe((result:any)=>{
      console.log("Result",result)
      this.transaction=result.transaction
      this.balance=result.balance
      console.log('transaction',this.transaction)
    })
  }

}
