import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../../services/rangle/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private quote: string;
  get Quote(): string {
    return this.quote;
  }
  set Quote(value: string) {
    this.quote = value;
  }
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }
  refreshQuote() {
    this.quoteService.getQuote()
      .then((quote) => {
        this.Quote = quote;
      });
  }
}
