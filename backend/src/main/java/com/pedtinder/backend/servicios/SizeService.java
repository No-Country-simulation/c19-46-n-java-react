package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Size;
import com.pedtinder.backend.repositorios.SizeRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class SizeService {

    private final SizeRepository sizeRepository;

    @PostConstruct
    @Transactional
    public void init() {
        if(sizeRepository.count() == 0) {

            Set<Size> tamanios = Set.of(
                    new Size("Miniatura (hasta 5 kg.)"),
                    new Size("Pequeño (entre 5 y 10 kg.)"),
                    new Size("Pequeño-Mediano (entre 10 y 15 kg.)"),
                    new Size("Mediano (entre 15 y 25 kg.)"),
                    new Size("Mediano-Grande (entre 25 y 35 kg.)"),
                    new Size("Grande (entre 35 y 45 kg.)"),
                    new Size("Muy Grande (entre 45 y 55 kg.)"),
                    new Size("Gigante (mas de 55 kg.)")
            );



            sizeRepository.saveAll(tamanios);
        }
    }

    public Set<Size> getSizes() {

        return sizeRepository.findAllByOrderById();

    }

}