import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rangle-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private message = '';
  get Message() {
    return this.message;
  }
  set Message(value) {
    this.message = value;
  }
  constructor() { }

  ngOnInit() {
  }

  clearMessage() {
    this.message = '';
  }
}
