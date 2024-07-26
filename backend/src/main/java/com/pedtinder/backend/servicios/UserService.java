package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.CompleteUserRegistrationDTO;
import com.pedtinder.backend.entidades.City;
import com.pedtinder.backend.entidades.User;
import com.pedtinder.backend.repositorios.CityRepository;
import com.pedtinder.backend.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    @Transactional
    public void completeUserRegister(String username, CompleteUserRegistrationDTO request) {

        User user = userRepository.findByUsername(username).orElseThrow( () -> new IllegalArgumentException("Usuario no encontrado"));

        City city = cityRepository.findById(request.getCityId()).orElseThrow( () -> new IllegalArgumentException("Ciudad no encontrada"));

        user.setFirstname(request.getFirstname());
        user.setPhone(request.getPhone());
        user.setCity(city);

        userRepository.save(user);

    }

}
