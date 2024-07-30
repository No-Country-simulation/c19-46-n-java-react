package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PetPhotoService {

    private final PetPhotoRepository petPhotoRepository;

    private String uploaddirectory = "src/main/resources/static/images/";


//    Guarda imagen en directorio local
    public String saveImageToStorage(MultipartFile file) {

        try {

            String fileName = UUID.randomUUID().toString();
            String fileOriginalName = file.getOriginalFilename();

            long fileSize = file.getSize();
            long maxFileSize = 2 * 1024 * 1024;

            if (fileSize > maxFileSize){

                throw new RuntimeException("Archivo supera el tamaño limite");
            }

            if (!fileOriginalName.endsWith(".jpg") && !fileOriginalName.endsWith(".jpeg") && !fileOriginalName.endsWith(".png")){

                throw new RuntimeException("Solo JPG, JPEG, PNG");

            }

            String fileExtension = fileOriginalName.substring(fileOriginalName.lastIndexOf("."));
            String newFileName = fileName + fileExtension;

            File folder = new File(uploaddirectory);
            if (!folder.exists()) {
                folder.mkdirs();
            }

            Path path = Paths.get(uploaddirectory + newFileName);
            Files.write(path, file.getBytes());

            return newFileName;

        } catch (IOException e){

            throw new RuntimeException("Fallo la carga");
        }

    }

//    Guarda imagen en bbdd
    public PetPhoto uploadPetPhoto(MultipartFile file) throws IOException {

        if (file != null) {

            String fileName = saveImageToStorage(file);

            PetPhoto petPhoto = PetPhoto.builder()
                    .path(fileName)    // // Recupera el nombre del archivo para mostrar en pantalla
                    .name(file.getOriginalFilename())
                    .build();

            return petPhotoRepository.save(petPhoto);

        }

        return null;
    }


//retorna lista de photos
    public List<PetPhoto> findPetPhotoAll() {

        List<PetPhoto> photos = new ArrayList<PetPhoto>();

        petPhotoRepository.findAll().forEach(photo -> photos.add(photo));

        return photos;

    }


}
