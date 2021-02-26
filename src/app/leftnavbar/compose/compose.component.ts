import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit, OnChanges {

  largerWidth = '150px';
  shorterWidth = '50px';
  @Input() isMenuButtonEnabled: boolean = true;

  constructor() { 
  }

  ngOnInit(){
  }
  
  ngOnChanges(){
    if(this.isMenuButtonEnabled){
      this.changeContainerWidth(this.largerWidth);
      document.getElementById("composeContainerText")!.style.display = "inline";
    }
    else{
      this.changeContainerWidth(this.shorterWidth);
      document.getElementById("composeContainerText")!.style.display = "none";
    }
  }

  changeContainerWidth(width : string){
    console.log(width);
    document.getElementById("composeContainerWidth")!.style.width = width;
  }

  changeContainerWidthOnMouseEnter(){
    if(!this.isMenuButtonEnabled){
      document.getElementById("composeContainerWidth")!.style.transitionDelay = ".5s";
      this.changeContainerWidth(this.largerWidth);
    }
  }

  changeContainerWidthOnMouseLeave(){
    if(!this.isMenuButtonEnabled){
      document.getElementById("composeContainerWidth")!.style.transitionDelay = "0s";
      this.changeContainerWidth(this.shorterWidth);
    }
  }

}
