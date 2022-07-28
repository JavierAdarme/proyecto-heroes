import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosPipeComponent } from './ejemplos-pipe.component';

describe('EjemplosPipeComponent', () => {
  let component: EjemplosPipeComponent;
  let fixture: ComponentFixture<EjemplosPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplosPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
