import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasseisComponent } from './reservasseis.component';

describe('ReservasseisComponent', () => {
  let component: ReservasseisComponent;
  let fixture: ComponentFixture<ReservasseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasseisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
