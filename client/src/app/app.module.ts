import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './component/member/member.component';
import { MemberlistComponent } from './component/memberlist/memberlist.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BookingcalendarComponent } from './component/bookingcalendar/bookingcalendar.component';

import { FooterComponent } from './component/footer/footer.component';
import { TitleComponent } from './component/title/title.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    NavbarComponent,
    MemberlistComponent,
    BookingcalendarComponent,
    FooterComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
