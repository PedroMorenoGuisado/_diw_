import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariocincoComponent } from './horariocinco.component';

describe('HorariocincoComponent', () => {
  let component: HorariocincoComponent;
  let fixture: ComponentFixture<HorariocincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariocincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariocincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
