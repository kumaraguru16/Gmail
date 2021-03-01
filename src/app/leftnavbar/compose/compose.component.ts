import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit, OnChanges {
  [x: string]: any;

  largerWidth = '150px';
  shorterWidth = '50px';
  @Input() isMenuButtonEnabled: boolean = true;
  // sharedService: any;

  constructor() { 
  }

  ngOnInit(){
  }
  // showVar: boolean = true;

  //   toggleChild(){
  //       this.showVar = !this.showVar;
  //   }

//   toggleme(){
//     this.ShareMsgService.emitData();
//  }
  
  ngOnChanges(){
    if(this.isMenuButtonEnabled){
      this.changeContainerWidth(this.largerWidth);
    }
    else{
      this.changeContainerWidth(this.shorterWidth);
    }
  }

  changeContainerWidth(width : string){
    document.getElementById("composeContainerWidth")!.style.width = width;
  }

}
