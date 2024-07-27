package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> {


}
