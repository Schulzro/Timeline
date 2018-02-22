import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MOCK_STEPS } from './steps.mock';

import 'rxjs/add/observable/of';
import { Step } from './step.model';

@Injectable()
export class StepsService {

  constructor() { }

  public getAllSteps(): Observable<Step[]> {
    return Observable.of(MOCK_STEPS);
  }

}
