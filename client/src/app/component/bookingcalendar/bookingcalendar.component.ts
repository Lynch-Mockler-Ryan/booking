import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MatDialog} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';

import { BookingformComponent } from '../bookingform/bookingform.component';

@Component({
  selector: 'app-bookingcalendar',
  templateUrl: './bookingcalendar.component.html',
  styleUrls: ['./bookingcalendar.component.scss']
})
export class BookingcalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  dialogRef: any;
  animal: string;
  name: string;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    this.dialogRef = this.matDialog.open(BookingformComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });


    //const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    //dialogConfig.disableClose = true;
    //dialogConfig.id = "modal-component";
    //dialogConfig.height = "350px";
    //dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    //const modalDialog = this.matDialog.open(BookingformComponent, dialogConfig);

    //if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //  this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //    title: 'New Event',
    //    start: arg.date,
    //    allDay: arg.allDay
    //  })
    //}
  }

}
