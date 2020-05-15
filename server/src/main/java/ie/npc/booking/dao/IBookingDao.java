package ie.npc.booking.dao;

import ie.npc.booking.model.Booking;
import ie.npc.booking.model.Member;

import java.util.List;

public interface IBookingDao {
    Booking findOne(long id);

    List<Booking> findAll();

    Booking create(Booking entity);

    Booking update(Booking entity);

    void delete(Booking entity);

    void deleteById(long entityId);
}
