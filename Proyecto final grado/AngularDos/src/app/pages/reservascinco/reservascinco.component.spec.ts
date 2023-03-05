import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservascincoComponent } from './reservascinco.component';

describe('ReservascincoComponent', () => {
  let component: ReservascincoComponent;
  let fixture: ComponentFixture<ReservascincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservascincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservascincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
