package com.pedtinder.backend.entidades;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
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
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;

}
