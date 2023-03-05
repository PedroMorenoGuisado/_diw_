import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariotresComponent } from './horariotres.component';

describe('HorariotresComponent', () => {
  let component: HorariotresComponent;
  let fixture: ComponentFixture<HorariotresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariotresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariotresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
