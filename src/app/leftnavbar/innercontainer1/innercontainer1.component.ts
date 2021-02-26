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
      document.getElementById("inboxText")!.style.display = "inline";
      document.getElementById("starredText")!.style.display = "inline";
      document.getElementById("snoozedText")!.style.display = "inline";
      document.getElementById("sentText")!.style.display = "inline";
      document.getElementById("draftsText")!.style.display = "inline";
      document.getElementById("moreText")!.style.display = "inline";
    }
    else{
      this.changeContainerWidth(this.shorterWidth);
      document.getElementById("inboxText")!.style.display = "none";
      document.getElementById("starredText")!.style.display = "none";
      document.getElementById("snoozedText")!.style.display = "none";
      document.getElementById("sentText")!.style.display = "none";
      document.getElementById("draftsText")!.style.display = "none";
      document.getElementById("moreText")!.style.display = "none";
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
