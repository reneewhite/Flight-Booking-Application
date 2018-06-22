import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstname
  surname
  country
  subject
  
  constructor(private router:Router) { }
  
    ngOnInit() {
      
    }
  
    contact(){
      //sending parameteres to another page
      this.router.navigate(['etail/display'],{queryParams:{firstname:this.firstname,surname:this.surname,country:this.country,subject:this.subject}});
      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.country);
      console.log(this.subject);
      
      alert("Message delivered, you will recieve a mail from us soon!!");
    }
  }