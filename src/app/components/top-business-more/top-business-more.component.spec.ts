import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusinessMoreComponent } from './top-business-more.component';

describe('TopBusinessMoreComponent', () => {
  let component: TopBusinessMoreComponent;
  let fixture: ComponentFixture<TopBusinessMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBusinessMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBusinessMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
