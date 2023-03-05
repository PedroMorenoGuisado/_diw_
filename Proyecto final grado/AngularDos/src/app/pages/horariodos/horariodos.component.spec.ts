import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariodosComponent } from './horariodos.component';

describe('HorariodosComponent', () => {
  let component: HorariodosComponent;
  let fixture: ComponentFixture<HorariodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
