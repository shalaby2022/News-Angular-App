import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineMoreComponent } from './headline-more.component';

describe('HeadlineMoreComponent', () => {
  let component: HeadlineMoreComponent;
  let fixture: ComponentFixture<HeadlineMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlineMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
