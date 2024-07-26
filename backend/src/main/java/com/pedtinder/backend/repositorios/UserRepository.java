package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepositorio  extends JpaRepository<User, Long> {

    boolean existsByNickname(String nickname);
    boolean existsByEmail(String email);

    Optional<User> findByNickname(String nickname);

}
