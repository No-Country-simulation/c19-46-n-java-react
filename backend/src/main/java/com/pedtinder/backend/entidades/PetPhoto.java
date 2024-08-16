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

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_pet")
    @JsonBackReference
    private Pet pet;
}

