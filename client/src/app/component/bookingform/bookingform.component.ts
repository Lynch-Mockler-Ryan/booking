import { Component } from '@angular/core';
import {OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from 'src/app/service/booking.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.sass'],
  providers: [DatePipe]
})
export class BookingformComponent implements OnInit {
  booking: any = {};

  constructor(private dialogRef: MatDialogRef<BookingformComponent>,
    private bookingService : BookingService, private datePipe:DatePipe) { 
    
  }

  ngOnInit(): void {
  }

  add(Booking : any) {

    Booking.startTime = this.datePipe.transform( Booking.startTime,'yyyy-MM-dd  h:mm:ss');
    Booking.finishTime = this.datePipe.transform( Booking.finishTime,'yyyy-MM-dd  h:mm:ss');
    
    console.log(`saving ` + Booking);
    this.bookingService.add(Booking).subscribe(result => {
      
    }, error => console.error(error));
  }

}
