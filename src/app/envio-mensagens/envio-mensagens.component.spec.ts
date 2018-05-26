import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMensagensComponent } from './envio-mensagens.component';

describe('EnvioMensagensComponent', () => {
  let component: EnvioMensagensComponent;
  let fixture: ComponentFixture<EnvioMensagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioMensagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
