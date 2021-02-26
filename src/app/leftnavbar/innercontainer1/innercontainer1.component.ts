import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-innercontainer1',
  templateUrl: './innercontainer1.component.html',
  styleUrls: ['./innercontainer1.component.css']
})
export class Innercontainer1Component implements OnInit, OnChanges {

  largerWidth = '250px';
  shorterWidth = '65px';
  @Input() isMenuButtonEnabled: boolean = true;

  toggle: boolean = true;
  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
      this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
    });
  }
  
  ngOnChanges(){
    if(this.isMenuButtonEnabled){
      this.changeContainerWidth(this.largerWidth);
    }
    else{
      this.changeContainerWidth(this.shorterWidth);
    }
  }

  changeContainerWidth(width : string){
    document.getElementById("innerContainerWidth1")!.style.width = width;
    let button = document.getElementsByTagName('button');
    for(let i=0; i<button.length; i++){
      button[i].style.width=width;
    }
  }
}
