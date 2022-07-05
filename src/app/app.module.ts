import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TopBusinessComponent } from './components/top-business/top-business.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { HomeHeadlineCardsComponent } from './home-headline-cards/home-headline-cards.component';
import { HomeTopbusinessCardsComponent } from './home-topbusiness-cards/home-topbusiness-cards.component';
import { ErrorComponent } from './error/error.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TopBusinessComponent,
    HeadlineComponent,
    ReadingListComponent,
    HomeHeadlineCardsComponent,
    HomeTopbusinessCardsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
