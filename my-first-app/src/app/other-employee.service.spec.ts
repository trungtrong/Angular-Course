import { TestBed } from '@angular/core/testing';

import { OtherEmployeeService } from './other-employee.service';

describe('OtherEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherEmployeeService = TestBed.get(OtherEmployeeService);
    expect(service).toBeTruthy();
  });
});
