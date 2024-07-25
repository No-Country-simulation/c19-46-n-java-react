package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepositorio  extends JpaRepository<Usuario, Long> {

    boolean existsByNickname(String nickname);
    boolean existsByEmail(String email);

    Optional<Usuario> findByNickname(String nickname);

}
