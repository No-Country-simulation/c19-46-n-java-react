package com.pedtinder.backend.repositorios;

import com.pedtinder.backend.entidades.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    List<City> findAllByOrderById();
}
