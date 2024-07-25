package com.pedtinder.backend.controladores;

import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.servicios.CiudadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadControlador {

    @Autowired
    private CiudadServicio ciudadServicio;

    @GetMapping
    public Set<Ciudad> obtenerCiudades() {

        return ciudadServicio.obtenerCiudades();
    }

}
