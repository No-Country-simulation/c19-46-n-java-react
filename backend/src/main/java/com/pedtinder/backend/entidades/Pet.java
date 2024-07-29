package com.pedtinder.backend.entidades;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pedtinder.backend.enums.PetSex;
import com.pedtinder.backend.enums.PetSize;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;


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
    @JsonBackReference
    private User user;

    @OneToOne(mappedBy = "pet")
    @JsonManagedReference
    private PetPhoto photo;

    /*@OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<PetPhoto> photos; */

}
