import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioseisComponent } from './horarioseis.component';

describe('HorarioseisComponent', () => {
  let component: HorarioseisComponent;
  let fixture: ComponentFixture<HorarioseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioseisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
