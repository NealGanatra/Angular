import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
flag=false;
  data={
    to:"",
    subject:"",
    message:""
  }
  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log('Try to submit the form');
    console.log("Data: ",this.data);

    if(this.data.to==''||this.data.subject==''||this.data.message=='')
{
  this.snak.open("fields cannot be empty !!","OK");
 
  return;
}
this.flag=true;

    this.email.sendEmail(this.data).subscribe(
response=>{
  console.log(response);
  this.flag=false;
  this.snak.open("Email Send !!","OK");
},
error=>{
  console.log(error);
  this.flag=false;
  this.snak.open("Send Failed !!","Cancel");
}


    )
  }

}
