package com.pedtinder.backend.servicios;

import com.pedtinder.backend.entidades.Breed;
import com.pedtinder.backend.repositorios.BreedRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BreedService {

    private final BreedRepository breedRepository;

    @PostConstruct
    @Transactional
    public void init() {
        if(breedRepository.count() == 0) {

            List<Breed> razas = List.of(
                    new Breed("Sin raza definida"),
                    new Breed("Labrador Retriever"),
                    new Breed("Pastor Alemán"),
                    new Breed("Golden Retriever"),
                    new Breed("Bulldog"),
                    new Breed("Poodle"),
                    new Breed("Beagle"),
                    new Breed("Rottweiler"),
                    new Breed("Yorkshire Terrier"),
                    new Breed("Boxer"),
                    new Breed("Dachshund"),
                    new Breed("Husky Siberiano"),
                    new Breed("Chihuahua"),
                    new Breed("Doberman"),
                    new Breed("Gran Danés"),
                    new Breed("Shih Tzu"),
                    new Breed("Cocker Spaniel"),
                    new Breed("Pomerania"),
                    new Breed("Pastor Australiano"),
                    new Breed("Border Collie"),
                    new Breed("Shiba Inu"),
                    new Breed("Pitbull"),
                    new Breed("Bóxer"),
                    new Breed("Bulldog Francés"),
                    new Breed("Maltés"),
                    new Breed("Pug"),
                    new Breed("Galgo"),
                    new Breed("Akita Inu"),
                    new Breed("Jack Russell Terrier"),
                    new Breed("Setter Irlandés"),
                    new Breed("Samoyedo"),
                    new Breed("Pastor Belga"),
                    new Breed("Terranova"),
                    new Breed("San Bernardo"),
                    new Breed("Weimaraner"),
                    new Breed("Dálmata"),
                    new Breed("Basset Hound"),
                    new Breed("Collie"),
                    new Breed("Bull Terrier"),
                    new Breed("Cane Corso"),
                    new Breed("Springer Spaniel"),
                    new Breed("Vizsla"),
                    new Breed("Basenji"),
                    new Breed("Lhasa Apso"),
                    new Breed("West Highland White Terrier"),
                    new Breed("Scottish Terrier"),
                    new Breed("Cavalier King Charles Spaniel"),
                    new Breed("Boston Terrier"),
                    new Breed("Bichón Frisé"),
                    new Breed("Pointer"),
                    new Breed("Alaskan Malamute"),
                    new Breed("Chow Chow"),
                    new Breed("Shar Pei"),
                    new Breed("Bloodhound"),
                    new Breed("Rhodesian Ridgeback"),
                    new Breed("Fox Terrier"),
                    new Breed("Whippet")
            );

            breedRepository.saveAll(razas);
        }
    }

    public List<Breed> getBreeds() {

        return breedRepository.findAllByOrderById();

    }

}