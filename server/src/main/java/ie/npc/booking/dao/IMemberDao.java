package ie.npc.booking.dao;

import ie.npc.booking.model.Member;

import java.util.List;

public interface IMemberDao {
    Member findOne(long id);

    List<Member> findAll();

    Member create(Member entity);

    Member update(Member entity);

    void delete(Member entity);

    void deleteById(long entityId);
}
