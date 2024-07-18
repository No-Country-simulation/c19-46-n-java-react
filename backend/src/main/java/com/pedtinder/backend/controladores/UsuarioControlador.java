package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dto.UsuarioRegistroDTO;
import com.pedtinder.backend.entidades.Usuario;
import com.pedtinder.backend.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {

    @Autowired
    private UsuarioServicio usuarioServicio;

    @PostMapping("/registro")
    public Usuario registrarUsuario(@RequestBody UsuarioRegistroDTO usuarioDTO) {

        return usuarioServicio.registrarUsuario(usuarioDTO);
    }

}
