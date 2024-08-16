package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.ChangePetDataDTO;
import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.*;

import com.pedtinder.backend.enums.PetSex;
import com.pedtinder.backend.repositorios.BreedRepository;
import com.pedtinder.backend.repositorios.PetRepository;
import com.pedtinder.backend.repositorios.SizeRepository;
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
    private final BreedRepository breedRepository;
    private final SizeRepository sizeRepository;
    private final PetPhotoService petPhotoService;

    @Transactional
    public void petRegistration(List<MultipartFile> files, RegistrationPetDTO request) throws IOException {
        try {
            // Obtención del usuario autenticado
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado: " + username));

            // Obtención de la raza
            Breed breed = breedRepository.findById(request.getBreedId())
                    .orElseThrow(() -> new IllegalArgumentException("Raza no encontrada para ID: " + request.getBreedId()));

            // Obtención del tamaño
            Size size = sizeRepository.findById(request.getSizeId())
                    .orElseThrow(() -> new IllegalArgumentException("Tamaño no encontrado para ID: " + request.getSizeId()));

            // Validación del sexo de la mascota
            if (request.getPetSex() == null || (!request.getPetSex().equals(PetSex.Macho) && !request.getPetSex().equals(PetSex.Hembra))) {
                throw new IllegalArgumentException("Sexo de la mascota inválido: " + request.getPetSex());
            }

            // Creación de la entidad Pet
            Pet pet = Pet.builder()
                    .name(request.getName())
                    .age(request.getAge())
                    .description(request.getDescription())
                    .petSex(request.getPetSex())
                    .user(user)
                    .breed(breed)
                    .size(size)
                    .build();

            // Procesamiento y validación de archivos
            List<PetPhoto> photos = new ArrayList<>();

            for (MultipartFile file : files) {
                if (file != null && !file.isEmpty()) {
                    PetPhoto petPhoto = petPhotoService.uploadPetPhoto(file);
                    petPhoto.setPet(pet);
                    photos.add(petPhoto);
                } else {
                    throw new IllegalArgumentException("Archivo vacío encontrado en la solicitud");
                }
            }

            System.out.println(pet);
            System.out.println(photos);

            // Guardado de la mascota y fotos asociadas
            petRepository.save(pet);

            System.out.println("guarda mascota");
            petPhotoService.saveAll(photos);

            System.out.println("guarda fotos");

        } catch (IllegalArgumentException e) {
            // Manejo de excepciones específicas de argumentos
            throw e;
        } catch (IOException e) {
            // Manejo de excepciones relacionadas con la entrada/salida
            throw e;
        } catch (Exception e) {
            // Manejo de otras excepciones generales
            throw new RuntimeException("Error interno del servidor", e);
        }
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
    public void updatePet(Long id, ChangePetDataDTO pet) {

        Pet petdb = petRepository.findById(id).get();

//        if (Objects.nonNull(pet.getRace()) && !"".equalsIgnoreCase(pet.getRace())) {
//
//            petdb.setRace(pet.getRace());
//        }
        if (Objects.nonNull(pet.getAge()) && !"".equalsIgnoreCase(pet.getAge())) {

            petdb.setAge(pet.getAge());
        }
        if (Objects.nonNull(pet.getDescription()) && !"".equalsIgnoreCase(pet.getDescription())) {

            petdb.setDescription(pet.getDescription());
        }

        if (Objects.nonNull(pet.getPetSex())) {

            petdb.setPetSex(pet.getPetSex());
        }

//        if (Objects.nonNull(pet.getPetSize())) {
//
//            petdb.setPetSize(pet.getPetSize());
//        }

        petRepository.save(petdb);
    }


}
