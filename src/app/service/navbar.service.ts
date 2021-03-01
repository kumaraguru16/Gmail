import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isNavBarOptionEnable = new BehaviorSubject<boolean>(true);
  public $toggle = this.isNavBarOptionEnable.asObservable();

  isCompose = new BehaviorSubject<boolean>(false);
  public $toggleCompose = this.isCompose.asObservable();
  constructor() { }

  setToggle(val: boolean) {
    this.isNavBarOptionEnable.next(val);
  }

  setToggleCompose(val: boolean) {
    this.isCompose.next(val);
  }
}
