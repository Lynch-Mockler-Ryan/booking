import { Time } from '@angular/common';

export class Booking{
    id : number;
    name : string;
    email : string;
    mobile : number;    
    date : Date;
    startTime : Time;
    finishTime : Time;

}