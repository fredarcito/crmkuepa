import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarContactsComponent } from './bar-contacts.component';

describe('BarContactsComponent', () => {
  let component: BarContactsComponent;
  let fixture: ComponentFixture<BarContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
