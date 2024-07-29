package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PetPhotoService {

    private final PetPhotoRepository petPhotoRepository;


//    Guarda imagen en directorio local
    public String saveImageToStorage(String uploadDirectory, MultipartFile imageFile) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();

        Path uploadPath = Path.of(uploadDirectory);
        Path filePath = uploadPath.resolve(uniqueFileName);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return uniqueFileName;
    }

//    Guarda imagen en bbdd
    public PetPhoto uploadPetPhoto(MultipartFile file) throws IOException {

        if (file != null) {

            String uploadDirectory = "src/main/resources/static/images";

            String uniqueFileName = saveImageToStorage(uploadDirectory, file);

            PetPhoto petPhoto = PetPhoto.builder()
                    .path(uniqueFileName)    // // Recupera el nombre del archivo para mostrar en pantalla
                    .name(file.getOriginalFilename())
                    .build();

            return petPhotoRepository.save(petPhoto);

        }

        return null;
    }


//    Guarda más de una foto en bbdd
    public PetPhoto uploadPetPhotos(MultipartFile[] files) throws IOException{

        if (files != null && files.length > 0) {

            String uploadDirectory = "src/main/resources/static/images";
            StringBuilder petsImagesString  =  new StringBuilder();

            for (MultipartFile file : files) {

                String uniqueFileName = saveImageToStorage(uploadDirectory, file);
                petsImagesString.append(uniqueFileName).append(","); // "," Recuperar los nombres de los archivos para mostrar en pantalla

            }

            PetPhoto petPhoto = PetPhoto.builder()
                    .path(String.valueOf(petsImagesString))
                    .name("varias img")
                    .build();

            return petPhotoRepository.save(petPhoto);

        }

        return null;

    }

    // Método para recuperar una imagen del almacenamiento local
    public byte[] getPhoto(String imgDirectory, String photoPath) throws IOException {

        Path imagenPath = Path.of(imgDirectory, photoPath);

        if (Files.exists(imagenPath)) {

            byte [] imgBytes;
            imgBytes = Files.readAllBytes(imagenPath);
            return imgBytes;

        } else {

            throw new IOException("Imagen no encontrada: " + photoPath);

        }

    }

}
