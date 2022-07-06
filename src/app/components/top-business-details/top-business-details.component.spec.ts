import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusinessDetailsComponent } from './top-business-details.component';

describe('TopBusinessDetailsComponent', () => {
  let component: TopBusinessDetailsComponent;
  let fixture: ComponentFixture<TopBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBusinessDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
