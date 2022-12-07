import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:any
  acno:any
delacno:any
  constructor(private http:HttpClient,private root:Router) { 
   this.name=JSON.parse(localStorage.getItem('currentName') ||"")
  this.acno=JSON.parse(localStorage.getItem('currentAccountNumber') ||"")
  }
  
  ngOnInit(): void {
  }

  deleteacc(){
    this.delacno=JSON.parse(localStorage.getItem('currentAccountNumber')||"")
  }
 deleted(acno:any){
  
  this.http.delete(`http://localhost:3400/delete/${acno}`)
  .subscribe((result:any)=>{
    console.log("result:",result);
    this.root.navigateByUrl('')
      
  })
 }
 cancel(){
  this.delacno=""
 }
}
