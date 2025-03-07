import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjactComponent } from './projact.component';

describe('ProjactComponent', () => {
  let component: ProjactComponent;
  let fixture: ComponentFixture<ProjactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
