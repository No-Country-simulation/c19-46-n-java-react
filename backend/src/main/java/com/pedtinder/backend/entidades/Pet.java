package com.pedtinder.backend.entidades;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pedtinder.backend.enums.PetSex;
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
    private String description;

    @Enumerated(EnumType.STRING)
    PetSex petSex;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user")
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_breed")
    @JsonBackReference
    private Breed breed;

    @ManyToOne
    @JoinColumn(name = "id_size")
    @JsonBackReference
    private Size size;

    @OneToOne(mappedBy = "pet")
    @JsonManagedReference
    private PetPhoto photo;


    /*@OneToMany(mappedBy = "pet", cascade = CascadeType.ALL)
    private List<PetPhoto> photos; */

}
