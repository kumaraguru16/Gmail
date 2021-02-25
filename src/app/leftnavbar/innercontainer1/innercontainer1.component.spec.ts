import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innercontainer1Component } from './innercontainer1.component';

describe('Innercontainer1Component', () => {
  let component: Innercontainer1Component;
  let fixture: ComponentFixture<Innercontainer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Innercontainer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Innercontainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
