package ie.npc.booking.dao;

import ie.npc.booking.model.Member;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@Log4j2
public class MemberDao extends AbstractJpaDao<Member> implements IMemberDao {

    public MemberDao() {
        super();

        log.debug("MemberDao ...");

        setClazz(Member.class);

        log.debug("... MemberDao");
    }

}
