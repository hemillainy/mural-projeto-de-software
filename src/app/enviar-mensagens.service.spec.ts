import { TestBed, inject } from '@angular/core/testing';

import { EnviarMensagensService } from './enviar-mensagens.service';

describe('EnviarMensagensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviarMensagensService]
    });
  });

  it('should be created', inject([EnviarMensagensService], (service: EnviarMensagensService) => {
    expect(service).toBeTruthy();
  }));
});
