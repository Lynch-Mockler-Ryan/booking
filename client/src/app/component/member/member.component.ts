import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from './../../service/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.sass']
})
export class MemberComponent implements OnInit {
  member: any = {};

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }



  save(Member : any) {
    
    console.log(`saving ` + Member);
    this.memberService.save(Member).subscribe(result => {
      
    }, error => console.error(error));
  }

}
