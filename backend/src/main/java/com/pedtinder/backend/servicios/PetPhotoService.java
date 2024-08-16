package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PetPhotoService {

    private final PetPhotoRepository petPhotoRepository;

    public PetPhoto uploadPetPhoto(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            throw new RuntimeException("El archivo está vacío");
        }

        String fileOriginalName = file.getOriginalFilename();
        long fileSize = file.getSize();
        long maxFileSize = 2 * 1024 * 1024;

        if (fileSize > maxFileSize) {
            throw new RuntimeException("El archivo supera el tamaño límite");
        }

        // Generar un nombre único para el archivo
        String uniqueFileName = UUID.randomUUID().toString() + "_" + fileOriginalName;
        String contentString = Base64.getEncoder().encodeToString(file.getBytes());

        PetPhoto petPhoto = PetPhoto.builder()
                .content(contentString)
                .name(uniqueFileName)
                .build();

        return petPhotoRepository.save(petPhoto);
    }

    public byte[] getPhotoByte(Long id) {
        Optional<PetPhoto> petPhotoOpt = petPhotoRepository.findById(id);
        if (petPhotoOpt.isEmpty()) {
            throw new RuntimeException("Foto no encontrada");
        }

        PetPhoto petPhoto = petPhotoOpt.get();
        String contentPhoto = petPhoto.getContent();

        return Base64.getDecoder().decode(contentPhoto.getBytes());
    }

    public void saveAll(List<PetPhoto> photos) {
        petPhotoRepository.saveAll(photos);
    }
}


