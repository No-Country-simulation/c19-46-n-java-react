package com.pedtinder.backend.entidades;

import com.pedtinder.backend.enums.PetSex;
import com.pedtinder.backend.enums.PetSize;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    private String age;
    private String race;
    private String description;

    @Enumerated(EnumType.STRING)
    PetSex petSex;

    @Enumerated(EnumType.STRING)
    PetSize petSize;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user")
    private User user;

    @OneToOne(mappedBy = "pet")
    private PetPhoto photo;

}
