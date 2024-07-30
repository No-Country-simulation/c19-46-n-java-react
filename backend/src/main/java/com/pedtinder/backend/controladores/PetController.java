package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.servicios.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pet")
@RequiredArgsConstructor
public class PetController {

    private final PetService petService;

    @PostMapping("/register")
    public ResponseEntity<String> registerPet(@RequestParam("file") MultipartFile file, @ModelAttribute RegistrationPetDTO request) throws IOException {

        try {

            petService.petRegistration(file, request);
            return ResponseEntity.ok("Mascota registrada");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }

    }

   /* @GetMapping("/{petid}")
    public ResponseEntity<PetProfileDTO> getPetProfile(@PathVariable Long petid) throws IOException {

        try {

            PetProfileDTO petProfile = petService.getPetProfile(petid);
            return ResponseEntity.ok(petProfile);

        }catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }*/

    @Transactional
    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable("id") Long id){

        Pet pet = petService.getPet(id).orElseThrow(() -> new IllegalArgumentException("Mascota no encontrado $id"));

        return new ResponseEntity<Pet>(pet, HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable("id") Long id, @Validated @RequestBody Pet pet){

        Pet pet1 = petService.getPet(id).orElseThrow(() -> new IllegalArgumentException("Mascota no encontrada"));

        pet1.setName(pet.getName());
        pet1.setAge(pet.getAge());
        pet1.setDescription(pet.getDescription());
        pet1.setRace(pet.getRace());

        return petService.updatePet(pet1);

    }

    @GetMapping("/all")
    public ResponseEntity<List<Pet>> getAllPets() {

        List<Pet> pets = new ArrayList<>();

        pets = petService.getPetAll();

        return new ResponseEntity<List<Pet>>(pets, HttpStatus.OK);

    }

}
