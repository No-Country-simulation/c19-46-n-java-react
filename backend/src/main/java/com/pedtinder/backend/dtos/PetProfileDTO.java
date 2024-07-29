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
public class PetProfileDTO {

    private Long id;
    private String name;
    private String age;
    private String race;
    private String description;
    private PetSex  petSex;
    private PetSize petSize;
//    private String photo;
    private byte[] photo;

}
