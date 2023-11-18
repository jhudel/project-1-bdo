import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './entry/entry.component';

import { FormsModule } from '@angular/forms';
import { EntryService } from './entry.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent, EntryComponent]
})
export class AppModule { }
