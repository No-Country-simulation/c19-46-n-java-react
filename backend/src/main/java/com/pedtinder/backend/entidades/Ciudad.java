package com.pedtinder.backend.entidades;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombreCiudad;

    public Ciudad(String nombreCiudad) {

        this.nombreCiudad = nombreCiudad;

    }

}
