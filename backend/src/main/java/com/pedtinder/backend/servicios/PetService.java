package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.PetPhoto;

import com.pedtinder.backend.entidades.User;
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


        if (!file.isEmpty()) {
            PetPhoto petPhoto = petPhotoService.uploadPetPhoto(file);
            pet.setPhoto(petPhoto);
            petPhoto.setPet(pet);
        }

        petRepository.save(pet);

    }

}
