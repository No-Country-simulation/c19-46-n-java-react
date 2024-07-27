package com.pedtinder.backend.servicios;

import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.User;
import com.pedtinder.backend.repositorios.PetRepository;
import com.pedtinder.backend.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PetService {

    private final PetRepository petRepository;
    private final UserRepository userRepository;

    @Transactional
    public void petRegistration(RegistrationPetDTO request) {

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username).orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));


        Pet pet = Pet.builder()
                .name(request.getName())
                .age(request.getAge())
                .race(request.getRace())
                .description(request.getDescription())
                .petSex(request.getPetSex())
                .petSize(request.getPetSize())
                .user(user)
                .build();

        petRepository.save(pet);

    }



   /* private void userInSession() {

        Object principal = SecurityContextHolder
                .getContext()
                .getAuthentication().getPrincipal();

        UserDetails userDetails = null;

        if (principal instanceof UserDetails) {

            userDetails = (UserDetails) principal;

        }

        String userName = userDetails.getUsername();
    }*/

}
