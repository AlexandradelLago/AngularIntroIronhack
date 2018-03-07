import { Component, OnInit } from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-quote-list',
  template:`
  <h3> An awesome quote list! </h3>
  <button (click)="doCount()" >counter</button>  
  <app-my-counter></app-my-counter>
  <ul>
    <li *ngFor="let quote of quotes">
      <app-quote-item [theQuote]="quote"  (onDelete)="removeQuote($event)" ></app-quote-item>
    </li>
  </ul>
`,
  styleUrls: ['./quote-list.component.css'],
  //providers:[CounterService]
})
export class QuoteListComponent implements OnInit {
  quotes: Array<any> = [{
    id: 1,
    text: 'Walk as if you are kissing the Earth with your feet.',
    author: 'Thich Nhat Hanh'
  }, {
    id: 2,
    text: 'Life is a journey. Time is a river. The door is ajar.',
    author: 'Jim Butcher'
  }, {
    id: 3,
    text: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci'
  },{
    id:4,
    text:"Work hard or go home",
    author: "BlisS"
  }];
  constructor(private servicio:CounterService) { }

  ngOnInit() {
    //console.log(this.servicio.getGatoPulpo());
  }

  doCount(){
    this.servicio.increment();
  }

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }

}
