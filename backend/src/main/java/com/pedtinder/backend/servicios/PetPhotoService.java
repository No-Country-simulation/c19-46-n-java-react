package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class PetPhotoService {

    private final PetPhotoRepository petPhotoRepository;

    @Transactional
    public PetPhoto uploadPetPhoto(MultipartFile file) throws IOException {

        if (file != null) {

            PetPhoto petPhoto = PetPhoto.builder()
                    .mime(file.getContentType())
                    .name(file.getName())
                    .data(file.getBytes())
                    .build();

            return petPhotoRepository.save(petPhoto);

        }

        return null;
    }

}
