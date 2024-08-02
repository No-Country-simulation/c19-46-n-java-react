package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PetPhotoService {

    private final PetPhotoRepository petPhotoRepository;

//    Guarda imagen en bbdd
    public PetPhoto uploadPetPhoto(MultipartFile file) throws IOException {

        if (file != null) {

            String fileOriginalName = file.getOriginalFilename();

            long fileSize = file.getSize();
            long maxFileSize = 2 * 1024 * 1024;

            if (fileSize > maxFileSize){

                throw new RuntimeException("Archivo supera el tamaño limite");
            }

            if (!fileOriginalName.endsWith(".jpg") && !fileOriginalName.endsWith(".jpeg") && !fileOriginalName.endsWith(".png")){

                throw new RuntimeException("Solo JPG, JPEG, PNG");

            }

            String contentString = Base64.getEncoder().encodeToString(file.getBytes());

            PetPhoto petPhoto = PetPhoto.builder()
                    .content(contentString)    // // Recupera el archivo para mostrar en pantalla
                    .name(fileOriginalName)
                    .build();

            return petPhotoRepository.save(petPhoto);

        }

        return null;
    }

    public byte[] getPhotoByte(Long id){

        Optional<PetPhoto> petphoto = petPhotoRepository.findById(id);

        String contentPhoto = petphoto.get().getContent();

        byte[] photo = Base64.getDecoder().decode(contentPhoto.getBytes());

        return photo;

    }

}
