package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.CompleteUserRegistrationDTO;
import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.servicios.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pet/")
@RequiredArgsConstructor
public class PetController {

    private final PetService petService;

    @PostMapping("/register")
    public ResponseEntity<Void> registerPet(@RequestBody RegistrationPetDTO request) {

        petService.petRegistration(request);
        return ResponseEntity.ok().build();

    }

}
