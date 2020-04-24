package ie.npc.booking.model;

import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@ToString
public abstract class Person implements Serializable {
    private String name;
    private String email;
    private String mobile;


}
