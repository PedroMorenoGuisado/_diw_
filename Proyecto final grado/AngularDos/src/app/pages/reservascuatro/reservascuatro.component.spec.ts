import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservascuatroComponent } from './reservascuatro.component';

describe('ReservascuatroComponent', () => {
  let component: ReservascuatroComponent;
  let fixture: ComponentFixture<ReservascuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservascuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservascuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
