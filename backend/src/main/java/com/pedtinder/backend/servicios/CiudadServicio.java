package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.repositorios.CiudadRepositorio;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CiudadServicio {

    @Autowired
    private CiudadRepositorio ciudadRepositorio;

    @PostConstruct
    public void init() {
        if(ciudadRepositorio.count() == 0) {

            List<Ciudad> ciudades = Arrays.asList(
                    new Ciudad("Caracas"),
                    new Ciudad("Maracaibo"),
                    new Ciudad("Barquisimeto"),
                    new Ciudad("Valencia"),
                    new Ciudad("Ciudad Guayana"),
                    new Ciudad("Maturín"),
                    new Ciudad("Barcelona"),
                    new Ciudad("Maracay"),
                    new Ciudad("Ciudad Bolívar"),
                    new Ciudad("Cumaná"),
                    new Ciudad("Barinas"),
                    new Ciudad("San Cristóbal"),
                    new Ciudad("Cabimas"),
                    new Ciudad("Punto Fijo"),
                    new Ciudad("Puerto La Cruz"),
                    new Ciudad("Guarenas"),
                    new Ciudad("Los Teques"),
                    new Ciudad("Mérida"),
                    new Ciudad("Carora"),
                    new Ciudad("Ciudad Ojeda")

            );
            ciudadRepositorio.saveAll(ciudades);
        }
    }

    public List<Ciudad> obtenerCiudades() {

        return ciudadRepositorio.findAll();
    }

}
