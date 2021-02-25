import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightnavbar',
  templateUrl: './rightnavbar.component.html',
  styleUrls: ['./rightnavbar.component.css']
})
export class RightnavbarComponent implements OnInit {
  flag:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  hide(){
    this.flag=!this.flag;
  }
}
