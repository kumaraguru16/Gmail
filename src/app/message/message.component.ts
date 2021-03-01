import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() isCompose: boolean = false;
  constructor() { }
  show = true;
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

  ngOnChanges(){
    this.show = !this.isCompose;
  }

  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
  toggled: boolean = false;
handleSelection(event: { char: any; }) {
  console.log(event.char);
}
}


