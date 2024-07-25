package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.UsuarioRegistroDosDTO;
import com.pedtinder.backend.dtos.UsuarioRegistroUnoDTO;
import com.pedtinder.backend.servicios.UsuarioServicio;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioControlador {

    @Autowired
    private UsuarioServicio usuarioServicio;

    @PostMapping("/registro")
    public ResponseEntity<String> resgistro(@RequestBody UsuarioRegistroUnoDTO usuarioUnoDTO) {

        try {

            usuarioServicio.registrarUsuarioUno(usuarioUnoDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Usuario registrado con exito");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }

    }

    @PostMapping("/continua")
    public ResponseEntity<String> continua(@RequestParam String nickname, @RequestBody UsuarioRegistroDosDTO usuarioDosDTO) {

        try {

            usuarioServicio.registrarUsuarioDos(nickname, usuarioDosDTO);
            return ResponseEntity.ok("Datos de usuario completados");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }


    }

}
