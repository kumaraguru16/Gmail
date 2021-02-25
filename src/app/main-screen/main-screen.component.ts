import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  @Input() isNavBarOptionEnable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(flag: string) {
    //this.isNavBarOptionEnable = flag;
    console.log(this.isNavBarOptionEnable);
  }
}
