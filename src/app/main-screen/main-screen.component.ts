import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  toggle: boolean = true;
  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
      if (this.toggle) {

      } else {

      }
    });
  }
  changetheme(value:string){
    document.getElementById("wrapper")!.style.background=value?value:"white";
    document.getElementById("wrapper")!.style.backgroundRepeat="no-repeat";
    document.getElementById("wrapper")!.style.backgroundSize="cover";
    console.log("main component",value);
  }
}
