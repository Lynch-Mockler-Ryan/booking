package ie.npc.booking.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Entity
public class Booking implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String mobile;

    private LocalDateTime start;
    private LocalDateTime finish;

    private Long court;
}
