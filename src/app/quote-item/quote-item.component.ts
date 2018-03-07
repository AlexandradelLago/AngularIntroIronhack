import { Component, OnInit, Input,   Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  template: `
  <span> {{ theQuote.text }} </span>
  <small> {{ theQuote.author }} </small>
  <button (click)="onQuoteDelete()"> Delete </button>

`,
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() theQuote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onQuoteDelete () {
    this.onDelete.emit(this.theQuote.id);
  }

}
