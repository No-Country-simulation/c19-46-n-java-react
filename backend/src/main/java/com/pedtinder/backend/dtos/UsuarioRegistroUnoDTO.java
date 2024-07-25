package com.pedtinder.backend.dtos;

import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

@Data
public class UsuarioRegistroUnoDTO {


    private String nickname;
    private String email;
    private String contrasenia;
    private String confirmarContrasenia;

}
