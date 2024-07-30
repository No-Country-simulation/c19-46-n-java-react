package com.pedtinder.backend.controladores;

import com.pedtinder.backend.entidades.PetPhoto;
import com.pedtinder.backend.repositorios.PetPhotoRepository;
import com.pedtinder.backend.servicios.PetPhotoService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/img")
@RequiredArgsConstructor
public class PetPhotoController {

    private final PetPhotoService petPhotoService;
    private final PetPhotoRepository petPhotoRepository;
    private final HttpServletRequest request;

    @PostMapping("/upload")
    public Map<String, String> uploadPhoto(@RequestParam("file")MultipartFile multipartFile) throws IOException {

//        Cargav foto, pero no asocia a pet

        PetPhoto petPhoto = petPhotoService.uploadPetPhoto(multipartFile);
        String path = petPhotoService.saveImageToStorage(multipartFile);
        String host = request.getRequestURL().toString().replace(request.getRequestURI(), "");
        String url = ServletUriComponentsBuilder
                .fromHttpUrl(host)
                .path("/images/")
                .path(path)
                .toUriString();

        return Map.of("url", url);

    }

    @GetMapping("/list")
    public ResponseEntity<List<PetPhoto>> getAll() {

        List<PetPhoto> petPhotos = new ArrayList<>();
        petPhotos = petPhotoService.findPetPhotoAll();

        return new ResponseEntity<List<PetPhoto>>(petPhotos, HttpStatus.OK);
    }

}
