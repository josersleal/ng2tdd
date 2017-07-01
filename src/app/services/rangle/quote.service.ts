import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }

  getQuote(): Promise<string> {
    let result = new Promise<string>((resolve, reject) => {
      resolve('quote');
    });

    return result;
  }
}
