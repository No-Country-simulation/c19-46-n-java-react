package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.PetProfileDTO;
import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.PetPhoto;

import com.pedtinder.backend.entidades.User;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import com.pedtinder.backend.repositorios.PetRepository;
import com.pedtinder.backend.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Service
@RequiredArgsConstructor
public class PetService {

    private final PetRepository petRepository;
    private final UserRepository userRepository;
    private final PetPhotoService petPhotoService;
    private final PetPhotoRepository petPhotoRepository;

    @Transactional
    public void petRegistration(MultipartFile file, RegistrationPetDTO request) throws IOException {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username).orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));


        Pet pet = Pet.builder()
                .name(request.getName())
                .age(request.getAge())
                .race(request.getRace())
                .description(request.getDescription())
                .petSex(request.getPetSex())
                .petSize(request.getPetSize())
                .user(user)
                .build();


        if (!file.isEmpty()) {  // Se agrega una foto a la mascota
            PetPhoto petPhoto = petPhotoService.uploadPetPhoto(file);
            pet.setPhoto(petPhoto);
            petPhoto.setPet(pet);
        }

        petRepository.save(pet);

    }

    public PetProfileDTO getPetProfile(Long petid) throws IOException {

        Pet pet = petRepository.findById(petid).orElseThrow(() -> new IllegalArgumentException("Mascota no encontrada"));

        PetPhoto photo = petPhotoRepository.findByPetId(petid);

        String  imgDirectory  =  "src/main/resources/static/images" ;

        String photoPath = photo.getPath();

        // Obtener datos de imagen como matrices de bytes
        byte [] imageByte = petPhotoService.getPhoto(imgDirectory, photoPath);

        return PetProfileDTO.builder()
                .id(pet.getId())
                .name(pet.getName())
                .age(pet.getAge())
                .race(pet.getRace())
                .description(pet.getDescription())
                .petSex(pet.getPetSex())
                .petSize(pet.getPetSize())
                .photo(imageByte)
                .build();

    }

}
