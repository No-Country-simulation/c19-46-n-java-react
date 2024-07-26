package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface CiudadRepositorio extends JpaRepository<Ciudad, Long> {
    Set<Ciudad> findAllByOrderById();
}
