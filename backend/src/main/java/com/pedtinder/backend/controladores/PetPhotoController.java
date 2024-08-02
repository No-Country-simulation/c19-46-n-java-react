package com.pedtinder.backend.controladores;

import com.pedtinder.backend.servicios.PetPhotoService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/img")
@RequiredArgsConstructor
public class PetPhotoController {

    private final PetPhotoService petPhotoService;

    @GetMapping("/{id}")
    public ResponseEntity<ByteArrayResource> getPetImage(@PathVariable("id") Long id) {
        try {

            // Utilizar el PetService para obtener la imagen decodificada
            // Crear un recurso de bytes para la imagen
           ByteArrayResource imgResource = new ByteArrayResource(petPhotoService.getPhotoByte(id));

            // Configurar los encabezados de la respuesta
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // Cambia el tipo de contenido según tu imagen (JPEG, PNG, etc.)
            headers.setContentLength(petPhotoService.getPhotoByte(id).length);

            // Devolver la respuesta con la imagen
            return new ResponseEntity<>(imgResource, headers, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }

    }


}
