import { TestBed } from '@angular/core/testing';

import { BlockCheckerService } from './block-checker.service';

describe('BlockCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockCheckerService = TestBed.get(BlockCheckerService);
    expect(service).toBeTruthy();
  });
});
