package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.ChangePetDataDTO;
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

//    Muestra todos los pets
    @GetMapping("/all")
    public List<Pet> getAllPets() {

        return petService.getAllPet();

    }

//    Muestra un pet por id
    @Transactional
    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable("id") Long id){

        return petService.getPet(id);

    }

//    Modifica un pet por is
    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable("id") Long id, @Validated @RequestBody ChangePetDataDTO pet){

        return petService.updatePet(id, pet);

    }

}
