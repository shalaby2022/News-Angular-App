import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineDetailsComponent } from './headline-details.component';

describe('HeadlineDetailsComponent', () => {
  let component: HeadlineDetailsComponent;
  let fixture: ComponentFixture<HeadlineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
