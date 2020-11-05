import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsociacionComponent } from './listar-asociacion.component';

describe('ListarAsociacionComponent', () => {
  let component: ListarAsociacionComponent;
  let fixture: ComponentFixture<ListarAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAsociacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
