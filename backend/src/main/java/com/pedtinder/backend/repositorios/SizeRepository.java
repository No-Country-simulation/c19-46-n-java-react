package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long> {
    Set<Size> findAllByOrderById();
}
