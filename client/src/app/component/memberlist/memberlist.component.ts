import { Component, OnInit } from '@angular/core';
import { MemberService } from './../../service/member.service';
//import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.sass']
})
export class MemberlistComponent implements OnInit {
  members: Array<any>;
  

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.getAll().subscribe(data => {
      this.members = data;
    });
  }
}
