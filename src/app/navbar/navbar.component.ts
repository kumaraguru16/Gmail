import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Output() isNavBarEnable = new EventEmitter<string>();
  // flag: boolean = false;

  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
  }

  onClickNav(){
    // this.isNavBarEnable.emit("fksj");
    // this.flag = !this.flag;
    this.navbarservice.fun();
  }
}
