package com.pedtinder.backend.controladores;

import com.pedtinder.backend.entidades.Breed;
import com.pedtinder.backend.servicios.BreedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/breeds")
public class BreedController {

    @Autowired
    private BreedService breedService;

    @GetMapping
    public List<Breed> getBreeds() {
        return breedService.getBreeds();
    }
}
