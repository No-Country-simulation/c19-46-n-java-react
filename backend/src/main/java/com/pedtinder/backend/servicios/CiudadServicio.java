package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Ciudad;
import com.pedtinder.backend.repositorio.CiudadRepositorio;
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
                    new Ciudad("Puerto Ayacucho"),
                    new Ciudad("Barcelona"),
                    new Ciudad("San Fernando de Apure"),
                    new Ciudad("Maracay"),
                    new Ciudad("Barinas"),
                    new Ciudad("Ciudad Bolívar"),
                    new Ciudad("Valencia"),
                    new Ciudad("San Carlos"),
                    new Ciudad("Tucupita"),
                    new Ciudad("Coro"),
                    new Ciudad("San Juan de los Morros"),
                    new Ciudad("Barquisimeto"),
                    new Ciudad("Mérida"),
                    new Ciudad("Los Teques"),
                    new Ciudad("Maturín"),
                    new Ciudad("La Asunción"),
                    new Ciudad("Guanare"),
                    new Ciudad("Cumaná"),
                    new Ciudad("San Cristóbal"),
                    new Ciudad("Trujillo"),
                    new Ciudad("La Guaira"),
                    new Ciudad("San Felipe"),
                    new Ciudad("Maracaibo")

            );
            ciudadRepositorio.saveAll(ciudades);
        }
    }

    public List<Ciudad> obtenerCiudades() {

        return ciudadRepositorio.findAll();
    }

}
