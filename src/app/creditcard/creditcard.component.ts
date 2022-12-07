import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  fname: any
  accountnumber: any
  address: any
  panno: any
  phoneno: any
  credDATABASE: any = {}
  dummyarray: any = []

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit() {
    this.credDATABASE[this.accountnumber] = {
      "fname": this.fname,
      "address": this.address,
      "panno": this.panno,
      "phoneno": this.phoneno

    }
    alert('applied succesfully')
    console.log(this.credDATABASE);


    this.dummyarray.push({
      "accountno":this.accountnumber,
      "fname": this.fname,
      "address": this.address,
      "panno": this.panno,
      "phoneno": this.phoneno
      
    })

  }


}

