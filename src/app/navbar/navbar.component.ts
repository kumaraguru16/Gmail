import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;


  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
  }

  onClickNav() {
    this.visible = !this.visible;
    this.navbarservice.setToggle(this.visible);
  }
}
