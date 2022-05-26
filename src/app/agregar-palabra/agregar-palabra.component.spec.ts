import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPalabraComponent } from './agregar-palabra.component';

describe('AgregarPalabraComponent', () => {
  let component: AgregarPalabraComponent;
  let fixture: ComponentFixture<AgregarPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPalabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
