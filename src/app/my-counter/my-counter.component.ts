import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-my-counter',
  template: `
    <p> My Counter </p>
    <button (click)="incrementCounter()"> increment </button>
  `,
  styles: [],
  //providers: [CounterService]
})

export class MyCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {
    console.log(this.theCounter.getGatoPulpo());
  }

  incrementCounter() {
    this.theCounter.increment();
  }
}