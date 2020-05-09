import { Component } from '@angular/core';
import {OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.sass']
})
export class BookingformComponent implements OnInit {
  booking: any = {};

  constructor(private dialogRef: MatDialogRef<BookingformComponent>) { 
    
  }

  ngOnInit(): void {
  }

  save(arg) {
    //
    };

}
