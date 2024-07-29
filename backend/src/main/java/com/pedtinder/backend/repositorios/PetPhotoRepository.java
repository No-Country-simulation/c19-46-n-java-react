package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.PetPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetPhotoRepository extends JpaRepository<PetPhoto, String> {
}
