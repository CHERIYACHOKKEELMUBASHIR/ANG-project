import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// name:any
// accountnumber:any
// password:any

registerform=this.fb.group({
  name:["",[Validators.required,Validators.pattern('[A-Za-z]*')]],
  accountnumber:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3),Validators.maxLength(5)]],
  password:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

  constructor(private db:AuthserviceService,private log:Router,private fb:FormBuilder) {}

  ngOnInit(): void {
  }
  register(){
    var name:any=this.registerform.value.name
    var accountnumber:any=this.registerform.value.accountnumber
    var password:any=this.registerform.value.password

    if(this.registerform.valid){
    
      this.db.register(name,accountnumber,password)
    
      .subscribe((result)=>{
        console.log("RESname:",name,accountnumber,password)
        console.log("result:",result);
        if(result){
          console.log("RES:",result)
          alert ("Register successfully")
          this.log.navigateByUrl('')
        }else{
          alert("invalid form")
        }
      },(result)=>{
        console.log("test:",result.error.message)
        alert(result.error.message)
      })

  }
  }

}
