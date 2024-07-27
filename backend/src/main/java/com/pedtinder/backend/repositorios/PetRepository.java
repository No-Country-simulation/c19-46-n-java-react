package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {


}
