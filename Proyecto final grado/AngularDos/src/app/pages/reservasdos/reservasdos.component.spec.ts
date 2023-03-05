import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasdosComponent } from './reservasdos.component';

describe('ReservasdosComponent', () => {
  let component: ReservasdosComponent;
  let fixture: ComponentFixture<ReservasdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasdosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
