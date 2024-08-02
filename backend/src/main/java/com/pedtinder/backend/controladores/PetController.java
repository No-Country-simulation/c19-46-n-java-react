package com.pedtinder.backend.controladores;

import com.pedtinder.backend.dtos.ChangePetDataDTO;
import com.pedtinder.backend.dtos.RegistrationPetDTO;
import com.pedtinder.backend.entidades.Pet;
import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import com.pedtinder.backend.servicios.PetPhotoService;
import com.pedtinder.backend.servicios.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/pet")
@RequiredArgsConstructor
public class PetController {

    private final PetService petService;
    private final PetPhotoRepository petPhotoRepository;
    private final PetPhotoService petPhotoService;

    @PostMapping("/register")
    public ResponseEntity<String> registerPet(@RequestParam("file") MultipartFile file, @ModelAttribute RegistrationPetDTO request) throws IOException {

        try {

            petService.petRegistration(file, request);
            return ResponseEntity.ok("Mascota registrada");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }

    }

//    Muestra todos los pets
    @GetMapping("/all")
    public List<Pet> getAllPets() {

        return petService.getAllPet();

    }

//    Muestra un pet por id
    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable("id") Long id){

        return petService.getPet(id);

    }

//    Modifica un pet por is
    @PutMapping("/{id}")
    public ResponseEntity<String> updatePet(@PathVariable("id") Long id, @Validated @RequestBody ChangePetDataDTO pet){

        try {

            petService.updatePet(id, pet);
            return ResponseEntity.ok("Datos mascota modificados");

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().body(e.getMessage());

        }catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");

        }

    }

    //mostrar
    @GetMapping("/photo/{petid}")
    public ResponseEntity<ByteArrayResource> getPetPhoto(@PathVariable("petid") Long petid) {

        PetPhoto photo = petPhotoRepository.findByPetId(petid);

        try {

            // Crear un recurso de bytes para la imagen
            ByteArrayResource imgResource = new ByteArrayResource(petPhotoService.getPhotoByte(photo.getId()));

            // Configurar los encabezados de la respuesta
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // Cambia el tipo de contenido según tu imagen (JPEG, PNG, etc.)
            headers.setContentLength(petPhotoService.getPhotoByte(photo.getId()).length);

            // Devolver la respuesta con la imagen
            return new ResponseEntity<>(imgResource, headers, HttpStatus.OK);

        } catch (IllegalArgumentException e) {

            return ResponseEntity.badRequest().build();

        }

    }

}
