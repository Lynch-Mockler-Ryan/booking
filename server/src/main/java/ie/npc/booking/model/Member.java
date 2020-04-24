package ie.npc.booking.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;



@Getter
@Setter
@ToString
@Entity
public class Member  implements Serializable {//extends Person {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String mobile;

    private String memberNumber;

    private LocalDate since;
    private LocalDate expires;

    public Member(){

    }


}
