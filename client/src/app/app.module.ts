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
import { FullCalendarModule } from '@fullcalendar/angular';
import { BookingformComponent } from './component/bookingform/bookingform.component'; 
import { MatDialogModule } from '@angular/material/dialog';

import { MatDialog} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    NavbarComponent,
    MemberlistComponent,
    BookingcalendarComponent,
    FooterComponent,
    TitleComponent,
    BookingformComponent,
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
    HttpClientModule,
    FullCalendarModule,
    MatDialogModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    MatDialog
  ],
  bootstrap: [AppComponent],
  entryComponents: [BookingformComponent]
})
export class AppModule { }
