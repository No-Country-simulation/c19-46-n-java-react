package com.pedtinder.backend.controladores;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.servicios.PetPhotoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/img")
@RequiredArgsConstructor
public class PetPhotoController {

    private final PetPhotoService petPhotoService;

    @GetMapping("/list")
    public List<PetPhoto> getAll() {

        return petPhotoService.findPetPhotoAll();

    }

}
