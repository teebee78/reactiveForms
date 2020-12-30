import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { delay, switchMapTo, tap } from 'rxjs/operators';
import { TimeServiceService } from './time-service.service';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  constructor(private timeService: TimeServiceService) { }

  square(value: number): Observable<number> {
    return this.timeService.getTime().pipe(
      tap(time => console.log(`Time: ${time}`)),
      switchMapTo(of(value * value)),
      delay(500)
    );
  }

}
