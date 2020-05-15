package ie.npc.booking.dao;

import ie.npc.booking.model.Booking;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Repository;

@Repository
@Log4j2
public class BookingDao extends AbstractJpaDao<Booking> implements IBookingDao {

    public BookingDao() {
        super();

        log.debug("BookingDao ...");

        setClazz(Booking.class);

        log.debug("... BookingDao");
    }

}
