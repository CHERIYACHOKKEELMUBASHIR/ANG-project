import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any

  constructor(private root:Router) { 
    this.user=JSON.parse(localStorage.getItem('currentName')||"")
  }

  ngOnInit(): void {
  }
logout(){
localStorage.removeItem('currentAccountNumber')
  this.root.navigateByUrl("")
}
}
