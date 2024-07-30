package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.ChangePetDataDTO;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


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


        if (!file.isEmpty()) {  // Se agrega una foto a la mascota
            PetPhoto petPhoto = petPhotoService.uploadPetPhoto(file);
            pet.setPhoto(petPhoto);
            petPhoto.setPet(pet);
        }

        petRepository.save(pet);

    }

    @Transactional
    public List<Pet> getAllPet() {

        List<Pet> pets = new ArrayList<Pet>();

        petRepository.findAll().forEach(pet1 -> pets.add(pet1));

        return pets;

    }

    @Transactional
    public Pet getPet(Long id) {

        return petRepository.findById(id).get();

    }

    @Transactional
    public Pet updatePet(Long id, ChangePetDataDTO pet) {

        Pet petdb = petRepository.findById(id).get();

        if (Objects.nonNull(pet.getRace()) && !"".equalsIgnoreCase(pet.getRace())) {

            petdb.setRace(pet.getRace());
        }
        if (Objects.nonNull(pet.getAge()) && !"".equalsIgnoreCase(pet.getAge())) {

            petdb.setAge(pet.getAge());
        }
        if (Objects.nonNull(pet.getDescription()) && !"".equalsIgnoreCase(pet.getDescription())) {

            petdb.setDescription(pet.getDescription());
        }

        if (Objects.nonNull(pet.getPetSex())) {

            petdb.setPetSex(pet.getPetSex());
        }

        if (Objects.nonNull(pet.getPetSize())) {

            petdb.setPetSize(pet.getPetSize());
        }

        return petRepository.save(petdb);
    }

}
