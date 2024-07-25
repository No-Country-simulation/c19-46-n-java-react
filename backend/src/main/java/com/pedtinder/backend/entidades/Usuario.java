package com.pedtinder.backend.entidades;

import jakarta.persistence.*;
import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;
    private String email;
    private String contrasenia;
    private String nombreCompleto;
    private String telefono;

    @ManyToOne
    private Ciudad ciudad;

}
