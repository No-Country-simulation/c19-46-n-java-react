package com.pedtinder.backend.auth;

import com.pedtinder.backend.entidades.User;
import com.pedtinder.backend.enums.Role;
import com.pedtinder.backend.auth.jwt.JwtService;
import com.pedtinder.backend.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();

    }

    public AuthResponse register(RegisterDTO request) {

        if(request.getPassword().length() > 8) {

            throw new IllegalArgumentException("La contraseña no debe superar los 8 caracteres");

        }

        if(!request.getPassword().equals(request.getConfirmPassword())) {

            throw new IllegalArgumentException("Las contraseñas no coinciden");

        }

        if (userRepository.existsByEmail(request.getEmail())) {

            throw  new IllegalArgumentException("Ya existe un usuario con este email");

        }

        if (userRepository.existsByUsername(request.getUsername())) {

            throw  new IllegalArgumentException("Ya existe un usuario con este nickname");

        }

        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword()))
                .email(request.getEmail())
                .role(Role.USER)
                .build();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();

    }

}
