package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.City;
import com.pedtinder.backend.repositorios.CityRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;

    @PostConstruct
    @Transactional
    public void init() {
        if(cityRepository.count() == 0) {

            Set<City> ciudades = Set.of(
                    new City("Caracas"),
                    new City("Maracaibo"),
                    new City("Barquisimeto"),
                    new City("Valencia"),
                    new City("Ciudad Guayana"),
                    new City("Maturín"),
                    new City("Barcelona"),
                    new City("Maracay"),
                    new City("Ciudad Bolívar"),
                    new City("Cumaná"),
                    new City("Barinas"),
                    new City("San Cristóbal"),
                    new City("Cabimas"),
                    new City("Punto Fijo"),
                    new City("Puerto La Cruz"),
                    new City("Guarenas"),
                    new City("Los Teques"),
                    new City("Mérida"),
                    new City("Carora"),
                    new City("Puerto Ayacucho"),
                    new City("San Fernando de Apure"),
                    new City("San Carlos"),
                    new City("Tucupita"),
                    new City("Coro"),
                    new City("San Juan de los Morros"),
                    new City("La Asunción"),
                    new City("Guanare"),
                    new City("Trujillo"),
                    new City("La Guaira"),
                    new City("San Felipe")


            );
            cityRepository.saveAll(ciudades);
        }
    }

    public Set<City> getCities() {

        return cityRepository.findAllByOrderById();

    }

}
