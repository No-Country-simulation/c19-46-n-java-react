package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.PetProfileDTO;
import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.servicios.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

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

    @GetMapping("/{petid}")
    public PetProfileDTO getPetProfile(@PathVariable Long petid) throws IOException {

        return petService.getPetProfile(petid);

    }

}
