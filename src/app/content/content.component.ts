import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MailData } from '../interfaces/mail-data.model';
import { DataService } from '../service/data.service';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private navbarservice: NavbarService, private dataservice: DataService) { }
  allMail?: MailData;
  toggle: boolean = true;
  ngOnInit() {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
      console.log(this.toggle);
    });
    this.dataservice.getMailData().subscribe(val => {
      this.allMail = val;
      console.log(this.allMail);
    });
  }
  delete(id: number) {
    this.dataservice.deleteMailData(id).subscribe(val => {
      this.refresh();
    });
  }
  refresh() {
    this.dataservice.getMailData().subscribe(val => {
      this.allMail = val;
    });
  }
}
