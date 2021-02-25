import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innercontainer2Component } from './innercontainer2.component';

describe('Innercontainer2Component', () => {
  let component: Innercontainer2Component;
  let fixture: ComponentFixture<Innercontainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Innercontainer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Innercontainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
