import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonInfoComponent } from './detalles-person-info.component';

describe('DetallesPersonInfoComponent', () => {
  let component: DetallesPersonInfoComponent;
  let fixture: ComponentFixture<DetallesPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPersonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
