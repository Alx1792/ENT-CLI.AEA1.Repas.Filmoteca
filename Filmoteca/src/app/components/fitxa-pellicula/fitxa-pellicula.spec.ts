import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitxaPellicula } from './fitxa-pellicula';

describe('FitxaPellicula', () => {
  let component: FitxaPellicula;
  let fixture: ComponentFixture<FitxaPellicula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitxaPellicula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitxaPellicula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
