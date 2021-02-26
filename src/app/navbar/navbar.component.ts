import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() theme= new EventEmitter<string>();
  @Output() search= new EventEmitter<any>();
  visible: boolean = true;
  flag:boolean=false;
  black:string="#400000 ";
  white:string="white";
  //url:string="purple"
  url:string="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbN5CYyccoh94EBNB_7FuEmYi3wCexNQLvg&usqp=CAU')";

  constructor(private navbarservice: NavbarService) { }
  
  ngOnInit(): void {
  }
  themevalue(value:string){
    console.log(value);
    this.theme.emit(value);
  }
  form(){
    this.flag=!this.flag;
  }
  onKey(event:any) 
  {
    this.search.emit( event.target.value);
  }
  onClickNav() {
    this.navbarservice.setToggle(this.visible);
    this.visible = !this.visible;
  }
  
}
