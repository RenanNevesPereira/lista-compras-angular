import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComprasComponent } from './app-lista-compras.component';

describe('AppListaComprasComponent', () => {
  let component: ListaComprasComponent;
  let fixture: ComponentFixture<ListaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
