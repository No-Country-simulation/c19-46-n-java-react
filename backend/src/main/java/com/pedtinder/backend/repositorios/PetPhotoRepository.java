package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.PetPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface PetPhotoRepository extends JpaRepository<PetPhoto, Long> {

    @Query("SELECT DISTINCT p.pet.id FROM PetPhoto p WHERE p.pet IS NOT NULL")
    Set<Long> findDistinctPetIds();

    @Query("SELECT p.pet.id FROM PetPhoto p WHERE p.id = :photoId AND p.pet IS NOT NULL")
    Long findPetIdByPhotoId(@Param("photoId") Long photoId);

    @Query("SELECT p FROM PetPhoto p WHERE p.pet.id = :petId")
    PetPhoto findByPetId(@Param("petId") Long petId);

}
