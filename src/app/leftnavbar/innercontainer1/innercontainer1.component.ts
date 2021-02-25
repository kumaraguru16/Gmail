import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-innercontainer1',
  templateUrl: './innercontainer1.component.html',
  styleUrls: ['./innercontainer1.component.css']
})
export class Innercontainer1Component implements OnInit, OnChanges {

  largerWidth = '250px';
  shorterWidth = '65px';
  @Input() isMenuButtonEnabled: boolean = true;

  constructor() { 
  }

  ngOnInit(){
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
      document.getElementById("containerWidth")!.style.transitionDelay = ".5s";
      this.changeContainerWidth(this.largerWidth);
    }
  }

  changeContainerWidthOnMouseLeave(){
    if(!this.isMenuButtonEnabled){
      document.getElementById("containerWidth")!.style.transitionDelay = "0s";
      this.changeContainerWidth(this.shorterWidth);
    }
  }

}
