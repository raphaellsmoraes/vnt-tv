import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { WeatherService } from './shared/services/weather.service';
import { WeatherCardComponent } from './feed/weather-list/weather-card/weather-card.component';
import { WeatherListComponent } from './feed/weather-list/weather-list.component';
import { ClockComponent } from './header/clock/clock.component';
import { ActionsComponent } from './feed/actions/actions.component';
import { ButtonComponent } from './feed/actions/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    WeatherCardComponent,
    WeatherListComponent,
    ClockComponent,
    ActionsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
