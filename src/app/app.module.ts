import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { MainScreenComponent } from './main-screen/main-screen.component';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { MainScreenComponent } from './main-screen/main-screen.component';
>>>>>>> 84c990b6e5d2910445d4895b71b1fa21e6e8db3e
>>>>>>> Stashed changes
=======
import { SectionComponent } from './section/section.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    MainScreenComponent
=======
<<<<<<< HEAD
    NavbarComponent
=======
    MainScreenComponent
>>>>>>> 84c990b6e5d2910445d4895b71b1fa21e6e8db3e
>>>>>>> Stashed changes
=======
    MainScreenComponent,
    SectionComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
