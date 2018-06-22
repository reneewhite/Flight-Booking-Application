import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  firstname
  surname
  country
  subject

    constructor(private route:ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params=>{
      this.firstname=params["firstname"];    
      this.surname=params["surname"];    
      this.country=params["country"];    
      this.subject=params["subject"];
       

      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.country);
      console.log(this.subject);
      
     
    })
}
}