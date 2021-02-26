import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  constructor(private navbarservice: NavbarService) { }

  shorterWidth = '950px';
  largerWidth = '1135px';
  @Input() isMenuButtonEnabled: boolean = true;


  ngOnInit(){

  }
  ngOnChanges(){
    if(this.isMenuButtonEnabled){
      this.changeContainerWidth(this.shorterWidth);
    }
    else{
      this.changeContainerWidth(this.largerWidth);
    }
  }

  changeContainerWidth(width : string){
    console.log("content width changed to..."+width);
    document.getElementById("contentWidth")!.style.width = width;
  }
}
