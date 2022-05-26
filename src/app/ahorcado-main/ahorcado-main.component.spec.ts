import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoMainComponent } from './ahorcado-main.component';

describe('AhorcadoMainComponent', () => {
  let component: AhorcadoMainComponent;
  let fixture: ComponentFixture<AhorcadoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhorcadoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
