package com.pedtinder.backend.entidades;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "pet_photos")
public class PetPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String path;
    private String name;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_pet")
    @JsonBackReference
    private Pet pet;

    /* @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_pet")
    private Pet pet;*/

}
