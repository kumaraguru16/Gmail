import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  toggle: boolean = true;
  constructor(private navbarservice: NavbarService) { }

  ngOnInit(): void {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;

    });
  }
}
