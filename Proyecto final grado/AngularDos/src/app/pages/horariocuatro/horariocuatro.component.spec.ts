import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariocuatroComponent } from './horariocuatro.component';

describe('HorariocuatroComponent', () => {
  let component: HorariocuatroComponent;
  let fixture: ComponentFixture<HorariocuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariocuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariocuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
