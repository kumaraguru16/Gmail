import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  composeTimes = 3;
  toggle: boolean = true;
  toggleCompose: boolean = true;
  searchtext:any="";
  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
      if (this.toggle) {

      } else {

      }
    });
    this.navbarservice.$toggleCompose.subscribe(val => {
      this.toggleCompose = val;
      if (this.toggle) {

      } else {

      }
    });
  }
  searchcontent(search:any){
     this.searchtext=search;
     console.log("search value :",search);
  }
  changetheme(value:string){
    document.getElementById("wrapper")!.style.background=value?value:"white";
    document.getElementById("wrapper")!.style.backgroundRepeat="no-repeat";
    document.getElementById("wrapper")!.style.backgroundSize="cover";
    console.log("main component",value);
  }
}
