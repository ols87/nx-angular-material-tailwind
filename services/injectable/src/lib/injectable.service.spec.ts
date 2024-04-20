import { InjectableService } from './injectable.service';
import { TestBed } from '@angular/core/testing';

describe('InjectableService', () => {
  let service: InjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
