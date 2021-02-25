import { Component, OnInit, OnChanges } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class LeftnavbarComponent implements OnInit,OnChanges {

  isNavBarOptionEnable: boolean = this.navbarservice.isNavBarOptionEnable;

  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.isNavBarOptionEnable);
  }

}
