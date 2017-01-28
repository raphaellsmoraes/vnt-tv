import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { ActionButtonComponent } from './feed/action-button/action-button.component';
import { WeatherComponent } from './feed/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    ActionButtonComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
