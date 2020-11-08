import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsociacionComponent } from './add-asociacion.component';

describe('AddAsociacionComponent', () => {
  let component: AddAsociacionComponent;
  let fixture: ComponentFixture<AddAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
