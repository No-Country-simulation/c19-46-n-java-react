package com.pedtinder.backend.dtos;

import lombok.Data;

@Data
public class UsuarioRegistroDTO {

    private String nickname;
    private String email;
    private String contrasenia;
    private String confirmarContrasenia;
    private String nombreCompleto;
    private String telefono;
    private Long ciudadId;

}
