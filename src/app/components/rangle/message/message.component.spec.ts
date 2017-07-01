import { expect } from 'chai';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('Given a MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When starting the app', () => {
    it('Then it is created', () => {
      expect(component).to.exist;
    });
  });


  describe('When calling setMessage with a value', () => {

    it('Then it updates the message', () => {
      const newMsg = 'testing';
      component.Message = newMsg;
      expect(component.Message).to.equal(newMsg);
    });
  });

  describe('When calling clearMessage', () => {

    it('Then it clears the message', () => {
      component.clearMessage();
      expect(component.Message).to.equal('');
    });
  });

  describe('When calling clearMessage', () => {

    it('Then it clears the message', () => {
      component.clearMessage();
      expect(component.Message).to.equal('');
    });
  });


});
