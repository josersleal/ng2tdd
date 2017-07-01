import { expect } from 'chai';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { QuoteService } from '../../../services/rangle/quote.service';
import { destroyPlatform } from '@angular/core';

class MockedQuoteService {
  getQuote(): Promise<string> {
    let result = new Promise((resolve, reject) => {
      resolve('quote');
    });

    return result;
  }
}
describe('Given a QuoteComponent', () => {
  let SUT: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;


  beforeEach(() => {
    destroyPlatform();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteComponent],
      providers: [
        { provide: QuoteService, useClass: MockedQuoteService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    SUT = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('When starting the app', () => {
    it('Then it is created', () => {
      expect(SUT).to.exist;
    });
  });

  describe('When getting quote', () => {

    it('Then it returns a quote', () => {
      SUT.refreshQuote();
      fixture.whenStable()
        .then(() => {
          fixture.detectChanges();
          return fixture.whenStable();
        })
        .then(() => {
          const compiled = fixture.debugElement.nativeElement;
          const expected = compiled.querySelector('div').innerText;
          expect(expected).to.equal('test quote');
        });
    });

  });

});
