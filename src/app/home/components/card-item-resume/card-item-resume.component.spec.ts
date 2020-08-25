import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemResumeComponent } from './card-item-resume.component';

describe('CardItemResumeComponent', () => {
  let component: CardItemResumeComponent;
  let fixture: ComponentFixture<CardItemResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
