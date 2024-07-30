package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.ChangePasswordRequese;
import com.pedtinder.backend.dtos.CompleteUserRegistrationDTO;
import com.pedtinder.backend.entidades.City;
import com.pedtinder.backend.entidades.User;
import com.pedtinder.backend.repositorios.CityRepository;
import com.pedtinder.backend.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    @Transactional
    public void completeUserRegister(CompleteUserRegistrationDTO request, Principal connectedUser) {

//        User user = userRepository.findByUsername(username).orElseThrow( () -> new IllegalArgumentException("Usuario no encontrado"));
//      Uso datos usuario conectado
        var user = (User)((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        City city = cityRepository.findById(request.getCityId()).orElseThrow( () -> new IllegalArgumentException("Ciudad no encontrada"));

        user.setFirstname(request.getFirstname());
        user.setPhone(request.getPhone());
        user.setCity(city);

        userRepository.save(user);

    }

    public void changePassword(ChangePasswordRequese request, Principal connectedUser) {

        var user = (User)((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

//        Verificamos si la contraseña actual es correcta
        if(!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())){

            throw new IllegalStateException("Contraseña incorrecta");
        }

        //        Verificamos si las contraseñas ingresadas son iguales
        if (!request.getNewPassword().equals(request.getConfirmationPassword())){

            throw new IllegalStateException("Las contraseñas no son iguales");
        }

//        Actualizo las contraseña y guardo
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

    }
}
