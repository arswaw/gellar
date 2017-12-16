import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
//import { ClarityModule } from 'clarity-angular';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { MaterialModule } from '@angular/material';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}

// put in import
// ClarityModule.forRoot()