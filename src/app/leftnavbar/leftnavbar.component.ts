import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class LeftnavbarComponent implements OnInit, OnChanges {

  toggle: boolean = false;

  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
      console.log(this.toggle);
    });
  }

  ngOnChanges() {

  }

}
