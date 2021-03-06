import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './navbar/navbar.component';

import { MainScreenComponent } from './main-screen/main-screen.component';

import { SectionComponent } from './section/section.component';


import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { ContentComponent } from './content/content.component';
import { RightnavbarComponent } from './rightnavbar/rightnavbar.component';
import { Innercontainer1Component } from './leftnavbar/innercontainer1/innercontainer1.component';
import { Innercontainer2Component } from './leftnavbar/innercontainer2/innercontainer2.component';
import { ComposeComponent } from './leftnavbar/compose/compose.component';
import { MessageComponent } from './message/message.component';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainScreenComponent,
    SectionComponent,
    LeftnavbarComponent,
    ContentComponent,
    RightnavbarComponent,
    Innercontainer1Component,
    Innercontainer2Component,
    ComposeComponent,
    MessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    NgxEmojiPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
