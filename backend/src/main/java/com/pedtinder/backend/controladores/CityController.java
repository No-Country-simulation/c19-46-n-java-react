package com.pedtinder.backend.controladores;

import com.pedtinder.backend.entidades.City;
import com.pedtinder.backend.servicios.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadControlador {

    @Autowired
    private CityService cityService;

    @GetMapping
    public Set<City> getCities() {

        return cityService.getCities();
    }

}
