import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservastresComponent } from './reservastres.component';

describe('ReservastresComponent', () => {
  let component: ReservastresComponent;
  let fixture: ComponentFixture<ReservastresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservastresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservastresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
