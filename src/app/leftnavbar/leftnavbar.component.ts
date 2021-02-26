import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class LeftnavbarComponent implements OnInit, OnChanges {

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
    document.getElementById("containerWidth")!.style.width = width;
  }

  changeContainerWidthOnMouseEnter(){
    if(!this.isMenuButtonEnabled){
    }
  }

  changeContainerWidthOnMouseLeave(){
    if(!this.isMenuButtonEnabled){
    }
  }

}
