import { expect } from 'chai';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('Given a MessageComponent with an overrriden template', () => {
  let SUT: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  describe('When calling setMessage with a value And overriding the component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MessageComponent]
      });

      fixture = TestBed.overrideComponent(MessageComponent, {
        set: {
          template: '<span>{{message}}</span>'
        }
      })
        .createComponent(MessageComponent);
      SUT = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Then it updates the message', () => {
      const newMsg = 'message with overriden component at test';
      SUT.Message = newMsg;
      fixture.detectChanges();

      fixture.whenStable()
        .then(() => {
          const compiledComponent = fixture.debugElement.nativeElement;
          const elem = compiledComponent.querySelector('span').innerHtml;

          expect(SUT.Message).to.equal(newMsg);

        })
    });
  });
});
