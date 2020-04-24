package ie.npc.booking.dao;


import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;


public abstract class AbstractJpaDao<T extends Serializable> {
    private static final org.apache.logging.log4j.Logger logger = LogManager.getLogger(AbstractJpaDao.class);
    private Class<T> clazz;

    @PersistenceContext
    private EntityManager entityManager;

    public final void setClazz(final Class<T> clazzToSet) {
        this.clazz = clazzToSet;
    }

    public T findOne(final long id) {
        return entityManager.find(clazz, id);
    }

    @SuppressWarnings("unchecked")
    public List<T> findAll() {
        return entityManager.createQuery("from " + clazz.getName()).getResultList();
    }

    @Transactional
    public T create(final T entity) {
        logger.debug("create ...");

        logger.debug("entity :\n" + entity.toString());

        System.out.println("create entity :\n" + entity.toString());
        entityManager.persist(entity);

        logger.debug("... create");
        return entity;
    }

    public T update(final T entity) {
        return entityManager.merge(entity);
    }

    public void delete(final T entity) {
        entityManager.remove(entity);
    }

    public void deleteById(final long entityId) {
        final T entity = findOne(entityId);
        delete(entity);
    }

}