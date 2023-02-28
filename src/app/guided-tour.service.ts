import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GuidedTourService {
    
    constructor(
    ) {}

    startTour  = new BehaviorSubject<boolean>(false);
    
    currentStep  = new BehaviorSubject<number>(-1);

    setStartTour(value) {
        if(value) { // if the value is true, set step as '1'.
            this.setCurrentStep(0);
        }
        this.startTour.next(value);
    }

    setCurrentStep(value) {
        this.currentStep.next(value);
    }

}
