import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SquareService } from './square.service';
import { TimeServiceService } from './time-service.service';

describe('SquareService', () => {
  let service: SquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should compute correctly', (done: DoneFn) => {
    service.square(4).subscribe(result => {
      expect(result).toBe(16  );
      done();
    });
  })

  it('should compute correctly 2', (done: DoneFn) => {
    const fake = { getTime: () => of(new Date) };
    service = new SquareService(fake as TimeServiceService);
    service.square(4).subscribe(result => {
      expect(result).toBe(16);
      done();
    });
  })

  it('should compute correctly with spies', (done: DoneFn) => {
    const timeSpy = jasmine.createSpyObj('TimeServiceService', ['getTime']);
    const stubValue = of(new Date());
    timeSpy.getTime.and.returnValue(stubValue);

    service = new SquareService(timeSpy);
    service.square(4).subscribe(result => {
      expect(result).toBe(16);
      done();
    });
  })

});
