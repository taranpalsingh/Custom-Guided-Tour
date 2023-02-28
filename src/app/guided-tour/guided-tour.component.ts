import {Component, OnDestroy, OnInit} from '@angular/core';
import { GuidedTourService } from 'app/guided-tour.service';
import { Subscription } from 'rxjs';
import {Constants} from './guided-tour.constants';

@Component({
  selector: 'app-guided-tour',
  templateUrl: './guided-tour.component.html',
  styleUrls: ['./guided-tour.component.scss']
})
export class GuidedTourComponent implements OnInit, OnDestroy {

  constants = Constants;
  showBackdrop = false;
  steps = [];
  currentStep = this.constants.NullStep;
  
  totalStepCount: number;

  $currentStep: Subscription;
  $guidedTourCompleted: Subscription;
  
  constructor(
    private tourService: GuidedTourService,
  ) { }

  ngOnInit() {
    this.initializeSteps();

    this.$currentStep = this.tourService.currentStep
    .subscribe(response => {

      if(response!=this.currentStep.stepCount) {
        this.showBackdrop = true;
        this.currentStep = this.steps.find(step => step["stepCount"]===response);
        this.guidedTourStep();
      }
    })
  }

  initializeSteps() {
    let count = 0;

    this.constants.Steps.forEach(step => {
      this.steps.push({
        ...step,
        stepCount: count
      })
      count += 1;
    })

    this.totalStepCount = this.steps.length;
  }

  guidedTourStep() {
    const step = this.currentStep;
    const overlay = document.getElementById(this.constants.OverlayId);
    overlay.setAttribute("style", `right: ${this.currentStep.right}; top: ${this.currentStep.top};`);
    let target = document.getElementById(step.selector);
    target.append(overlay);
    this.guidedTourHighlightElement(true); 
  }

  guidedTourHighlightElement(highlight) {
    const element = document.getElementById(this.currentStep.selector);
    const overlay = document.getElementById(this.constants.OverlayId);

    highlight ? element.classList.add('active') : element.classList.remove('active');
    
    if(this.currentStep.title != 'Settings') {
      highlight ? element.classList.add('highlight-element') : element.classList.remove('highlight-element');
    } else {
      highlight ? overlay.classList.add('settings-overlay') : overlay.classList.remove('settings-overlay');
    }
  }

  endTour() {
    this.guidedTourHighlightElement(false);
    this.tourService.setStartTour(false);
    this.currentStep = this.constants.NullStep;
    this.tourService.setCurrentStep(-1);
    this.showBackdrop = false;
  }

  goToStep(number) {
    this.guidedTourHighlightElement(false);
    this.tourService.setCurrentStep(number);
  }

  goToNext() {
    this.guidedTourHighlightElement(false);
    if(this.currentStep.stepCount === this.totalStepCount - 1) {
      this.endTour();
    } else{
      this.tourService.setCurrentStep(+this.currentStep.stepCount + 1);
    }
  }
  
  ngOnDestroy() {
    (this.$currentStep) ? this.$currentStep.unsubscribe() : null;
    (this.$guidedTourCompleted) ? this.$guidedTourCompleted.unsubscribe() : null;
  }
}
