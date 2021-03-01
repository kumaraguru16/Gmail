import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  show = false;
  public isViewable: boolean = true; 
  public toggle(): void { this.isViewable = !this.isViewable; }
  @Input()
  showMe: boolean = true;
 
  toggleDisplay() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.isViewable = true;
  }
  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
  toggled: boolean = false;
handleSelection(event: { char: any; }) {
  console.log(event.char);
}
}


