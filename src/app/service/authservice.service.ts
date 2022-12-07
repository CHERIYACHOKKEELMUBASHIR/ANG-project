import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http:HttpClient) { }

  username:any
  database: any = {
    1000: { acno: 1000, uname: "Mubashir", password: 1000, balance: 100000 }
  }
  register(name:any,accountnumber:any,password:any){
    console.log("RESnameservice:",name,accountnumber,password)

    const data={
      acno:accountnumber,
      password,
      uname:name
    }
return this.http.post("http://localhost:3400/register",data)

  //  var database:any=this.database

  //   if(accountnumber in database){
  //     return false
  //   }else{
  //     database[accountnumber]={
  //       "acno":accountnumber,
  //       "uname":name,
  //       "password":password

  //     }
  //     console.log(database)
  //     return true
  //   }

  }


  login(acno:any,password:any) {
    console.log("user:",acno,password);
    
    const data={
      "acno":acno,
      "password":password
    }
    console.log("DATA",data)
    return this.http.post('http://localhost:3400/login',data)
  }
    // alert("login clicked")
   
  //   if (acno in this.database) {
  //     if (pswd == this.database[acno]['password']) {
      
  //       this.username=this.database[acno]['uname']
  //       localStorage.setItem('user',JSON.stringify(this.username))
  //       return true
  //     } else {
  //       alert("incorrect password")
  //       return false
  //     }
  //   }
  //   else {
  //     alert("not a user,register first")
  //     return false
  //   }

  // }



}
