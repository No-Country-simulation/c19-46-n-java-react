package com.pedtinder.backend.repositorio;

import com.pedtinder.backend.entidades.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CiudadRepositorio extends JpaRepository<Ciudad, Long> {

}
