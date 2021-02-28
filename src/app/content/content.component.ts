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
  contentSelected: number = 1;
  isCheckboxClicked: boolean = false;
  allMailPrimary: MailData[] = [];
  allMailSocial: MailData[] = [];
  allMailPromotion: MailData[] = [];
  toggle: boolean = true;
  ngOnInit() {
    this.navbarservice.$toggle.subscribe(val => {
      this.toggle = val;
    });
    this.dataservice.getMailDataPrimary().subscribe(val => {
      this.allMailPrimary = val;
    });
    this.dataservice.getMailDataSocial().subscribe(val => {
      this.allMailSocial = val;
    });
    this.dataservice.getMailDataPromotion().subscribe(val => {
      this.allMailPromotion = val;
    });
  }
  deletePrimary(id: string) {
    this.dataservice.deleteMailDataPrimary(+id).subscribe(val => {
      this.refreshPrimary();
    });
  }

  readPrimary(id: string) {
    this.dataservice.readMailDataPrimary(+id).subscribe(val => {
      this.refreshPrimary();
    });
  }
  clickReadPrimary(id: string) {
    this.dataservice.clickReadPrimary(+id).subscribe(val => {
      this.refreshPrimary();
    });
  }
  refreshPrimary() {
    this.dataservice.getMailDataPrimary().subscribe(val => {
      this.allMailPrimary = val;
    });
  }

  deleteSocial(id: string) {
    this.dataservice.deleteMailDataSocial(+id).subscribe(val => {
      this.refreshSocial();
    });
  }

  readSocial(id: string) {
    this.dataservice.readMailDataSocial(+id).subscribe(val => {
      this.refreshSocial();
    });
  }
  clickReadSocial(id: string) {
    this.dataservice.clickReadSocial(+id).subscribe(val => {
      this.refreshPrimary();
    });
  }
  refreshSocial() {
    this.dataservice.getMailDataSocial().subscribe(val => {
      this.allMailSocial = val;
    });
  }

  deletePromotion(id: string) {
    this.dataservice.deleteMailDataPromotion(+id).subscribe(val => {
      this.refreshPromotion();
    });
  }

  readPromotion(id: string) {
    this.dataservice.readMailDataPromotion(+id).subscribe(val => {
      this.refreshPromotion();
    });
  }
  clickReadPromotion(id: string) {
    this.dataservice.clickReadPromotion(+id).subscribe(val => {
      this.refreshPrimary();
    });
  }
  refreshPromotion() {
    this.dataservice.getMailDataPromotion().subscribe(val => {
      this.allMailPromotion = val;
    });
  }

  changeContentSelectedPrimary() {
    this.contentSelected = 1;
    this.isCheckboxClicked = false;
  }

  changeContentSelectedSocial() {
    this.contentSelected = 2;
    this.isCheckboxClicked = false;
  }

  changeContentSelectedPromotion() {
    this.contentSelected = 3;
    this.isCheckboxClicked = false;
  }
  checkboxChecked() {
    this.isCheckboxClicked = !this.isCheckboxClicked;
  }
}
