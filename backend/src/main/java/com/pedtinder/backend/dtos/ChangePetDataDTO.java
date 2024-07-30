package com.pedtinder.backend.dtos;

import com.pedtinder.backend.enums.PetSex;
import com.pedtinder.backend.enums.PetSize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChangePetDataDTO {

    private String race;
    private String age;
    private String description;
    private PetSex  petSex;
    private PetSize petSize;

}
