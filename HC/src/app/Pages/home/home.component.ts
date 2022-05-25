import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open : boolean = false;
  
  openTwo : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  opens(){
    if(this.open){
      this.open = false;
    }
    else{
      this.open = true;
    }
  }

  openss(){
    if(this.openTwo){
      this.openTwo = false;
    }
    else{
      this.openTwo = true;
    }
  }
}
