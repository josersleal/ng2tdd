import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/rangle/message/message.component';
import { QuoteComponent } from './components/rangle/quote/quote.component';
import { QuoteService } from './services/rangle/quote.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
