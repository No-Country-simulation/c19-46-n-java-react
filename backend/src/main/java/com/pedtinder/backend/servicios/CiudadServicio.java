package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.repositorios.CiudadRepositorio;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class CiudadServicio {

    private final CiudadRepositorio ciudadRepositorio;

    @Autowired
    public CiudadServicio(CiudadRepositorio ciudadRepositorio) {

        this.ciudadRepositorio = ciudadRepositorio;

    }

    @PostConstruct
    @Transactional
    public void init() {
        if(ciudadRepositorio.count() == 0) {

            Set<Ciudad> ciudades = Set.of(
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
                    new Ciudad("Puerto Ayacucho"),
                    new Ciudad("San Fernando de Apure"),
                    new Ciudad("San Carlos"),
                    new Ciudad("Tucupita"),
                    new Ciudad("Coro"),
                    new Ciudad("San Juan de los Morros"),
                    new Ciudad("La Asunción"),
                    new Ciudad("Guanare"),
                    new Ciudad("Trujillo"),
                    new Ciudad("La Guaira"),
                    new Ciudad("San Felipe"),
                    new Ciudad("Ciudad Ojeda")

            );
            ciudadRepositorio.saveAll(ciudades);
        }
    }

    public Set<Ciudad> obtenerCiudades() {

        return ciudadRepositorio.findAllByOrderById();

    }

}
