package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.UsuarioRegistroDosDTO;
import com.pedtinder.backend.dtos.UsuarioRegistroUnoDTO;
import com.pedtinder.backend.entidades.Usuario;
import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.repositorios.CiudadRepositorio;
import com.pedtinder.backend.repositorios.UsuarioRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServicio {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private CiudadRepositorio ciudadRepositorio;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public void registrarUsuarioUno(UsuarioRegistroUnoDTO usuarioUnoDTO) {

        if(usuarioUnoDTO.getContrasenia().length() > 8) {

            throw new IllegalArgumentException("La contraseña no debe superar los 8 caracteres");

        }

        if(!usuarioUnoDTO.getContrasenia().equals(usuarioUnoDTO.getConfirmarContrasenia())) {

            throw new IllegalArgumentException("Las contraseñas no coinciden");

        }

        if (usuarioRepositorio.existsByEmail(usuarioUnoDTO.getEmail())) {

            throw  new IllegalArgumentException("Ya existe un usuario con este email");

        }

        if (usuarioRepositorio.existsByNickname(usuarioUnoDTO.getNickname())) {

            throw  new IllegalArgumentException("Ya existe un usuario con este nickname");

        }

        Usuario usuario = new Usuario();
        usuario.setNickname(usuarioUnoDTO.getNickname());
        usuario.setEmail(usuarioUnoDTO.getEmail());
        usuario.setContrasenia(passwordEncoder.encode(usuarioUnoDTO.getContrasenia()));

        usuarioRepositorio.save(usuario);

    }

    @Transactional
    public void registrarUsuarioDos(String nickname, UsuarioRegistroDosDTO usuarioDosDTO) {

        Usuario usuario = usuarioRepositorio.findByNickname(nickname).orElseThrow( () -> new IllegalArgumentException("Usuario no encontrado"));

        Ciudad ciudad = ciudadRepositorio.findById(usuarioDosDTO.getCiudadId()).orElseThrow( () -> new IllegalArgumentException("Ciudad no encontrada"));

        usuario.setNombreCompleto(usuarioDosDTO.getNombreCompleto());
        usuario.setTelefono(usuarioDosDTO.getTelefono());
        usuario.setCiudad(ciudad);

        usuarioRepositorio.save(usuario);

    }

}
