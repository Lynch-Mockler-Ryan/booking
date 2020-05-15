package ie.npc.booking.controller;

import ie.npc.booking.dao.BookingDao;
import ie.npc.booking.dao.MemberDao;
import ie.npc.booking.model.Booking;
import ie.npc.booking.model.Member;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
public class BookingController {

    @Autowired
    private BookingDao dao;

    @RequestMapping(value = "/addBooking", method = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT})
    public void addBooking(@RequestBody Booking booking){
        log.debug("addBooking ...");

        System.out.println("saveBooking:\n" + booking.getName());

        log.debug("Booking to register: " + booking.toString());

        Booking bookingAdded = dao.create(booking);

        log.debug("bookingAdded\n" + bookingAdded.toString());
        System.out.println("bookingAdded\n" + bookingAdded.toString());

        log.debug("... saveBooking");
    }
}
