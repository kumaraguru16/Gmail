import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isNavBarOptionEnable = new BehaviorSubject<boolean>(true);

  constructor() { }

  fun(){
    this.isNavBarOptionEnable = !this.isNavBarOptionEnable;
  }
}
