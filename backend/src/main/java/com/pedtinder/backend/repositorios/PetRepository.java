package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {

//    @Query(value = "SELECT DISTINCT user_id FROM pet WHERE user_id IS NOT NULL", nativeQuery = true)
    @Query("SELECT DISTINCT p.user.id FROM Pet p WHERE p.user IS NOT NULL")
    Set<Long> findDistinctUserIds();

    @Query("SELECT p.user.id FROM Pet p WHERE p.id = :petId AND p.user IS NOT NULL")
    Long findUserIdByPetId(@Param("petId") Long petId);

}
