package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.UsuarioRegistroDTO;
import com.pedtinder.backend.entidades.Usuario;
import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.repositorios.CiudadRepositorio;
import com.pedtinder.backend.repositorios.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServicio {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private CiudadRepositorio ciudadRepositorio;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public boolean nicknameExiste(String nickname) {

        Optional<Usuario> usuarioPorNickname = usuarioRepositorio.findByNickname(nickname);
        return usuarioPorNickname.isPresent();

    }

    public boolean emailExiste(String email) {

        Optional<Usuario> usuarioPorEmail = usuarioRepositorio.findByEmail(email);
        return usuarioPorEmail.isPresent();

    }

    public Usuario registrarUsuario(UsuarioRegistroDTO usuarioDTO) {

        if(nicknameExiste(usuarioDTO.getNickname())) {
            throw new IllegalArgumentException("El usuario ingresado ya existe.");
        }

        if (emailExiste(usuarioDTO.getEmail())) {
            throw new IllegalArgumentException("El email ingresado ya existe.");
        }

        if (!usuarioDTO.getContrasenia().equals(usuarioDTO.getConfirmarContrasenia())) {
            throw new IllegalArgumentException("Las contraseñas no coinciden.");
        }

        Optional<Ciudad> ciudadOptional = ciudadRepositorio.findById(usuarioDTO.getCiudadId());
        Ciudad ciudad = ciudadOptional.orElseThrow(() -> new IllegalArgumentException("Ciudad no válida."));

        Usuario usuario = new Usuario();
        usuario.setNickname(usuarioDTO.getNickname());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setContrasenia(passwordEncoder.encode(usuarioDTO.getContrasenia()));
        usuario.setNombreCompleto(usuarioDTO.getNombreCompleto());
        usuario.setTelefono(usuarioDTO.getTelefono());
        usuario.setCiudad(ciudad);

        return usuarioRepositorio.save(usuario);

    }

}
