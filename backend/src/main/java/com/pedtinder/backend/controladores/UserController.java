package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.CompleteUserRegistrationDTO;
import com.pedtinder.backend.servicios.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/complet")
    public ResponseEntity<String> continua(@RequestParam String username, @RequestBody CompleteUserRegistrationDTO request) {

        try {

            userService.completeUserRegister(username, request);
            return ResponseEntity.ok("Datos de usuario completados");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }


    }

}
