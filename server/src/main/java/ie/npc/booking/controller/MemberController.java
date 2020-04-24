package ie.npc.booking.controller;

import ie.npc.booking.dao.MemberDao;
import ie.npc.booking.model.Member;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2
public class MemberController {

    @Autowired
    private MemberDao dao;

    @GetMapping("/displayNewMemberForm")
    public Member displayNewMemberForm() {
        log.debug("displayNewMemberForm ...");
        log.debug("... displayNewMemberForm");
        return new Member();
    }

    @RequestMapping(value = "/saveMember", method = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT})
    public void saveMember(@RequestBody Member member){
        log.debug("saveMember ...");

        System.out.println("saveMember :\n" + member.getName());

        log.debug("member to register: " + member.toString());

        Member memberCreated = dao.create(member);

        log.debug("memberCreated\n" + memberCreated.toString());
        System.out.println("memberCreated\n" + memberCreated.toString());

        log.debug("... saveMember");
    }
}
