import { TestBed } from '@angular/core/testing';

import { DatosusuarioService } from './datosusuario.service';

describe('DatosusuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosusuarioService = TestBed.get(DatosusuarioService);
    expect(service).toBeTruthy();
  });
});
