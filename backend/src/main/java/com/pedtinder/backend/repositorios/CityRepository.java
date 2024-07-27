package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface CityRepository extends JpaRepository<City, Long> {
    Set<City> findAllByOrderById();
}
