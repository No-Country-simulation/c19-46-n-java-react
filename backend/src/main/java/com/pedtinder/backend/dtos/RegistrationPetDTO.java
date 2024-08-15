package com.pedtinder.backend.dtos;

import com.pedtinder.backend.enums.PetSex;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationPetDTO {

    private String name;
    private String age;
    private String race;
    private String description;
    PetSex petSex;
}
