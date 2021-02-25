import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-innercontainer2',
  templateUrl: './innercontainer2.component.html',
  styleUrls: ['./innercontainer2.component.css']
})
export class Innercontainer2Component implements OnInit, OnChanges {

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
