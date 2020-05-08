import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent} from './component/member/member.component';
import { MemberlistComponent} from './component/memberlist/memberlist.component';
import { BookingcalendarComponent } from './component/bookingcalendar/bookingcalendar.component';


const routes: Routes = [
  {path : 'member',
  component :MemberComponent
}, {path : 'memberlist',
component :MemberlistComponent
}, {path : 'bookingcalendar',
component :BookingcalendarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
