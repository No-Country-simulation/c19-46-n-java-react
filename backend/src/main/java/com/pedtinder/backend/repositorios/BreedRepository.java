package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Breed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BreedRepository extends JpaRepository<Breed, Long> {
    List<Breed> findAllByOrderById();
}