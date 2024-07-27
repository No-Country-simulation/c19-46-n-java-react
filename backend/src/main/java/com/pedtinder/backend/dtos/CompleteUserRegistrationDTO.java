package com.pedtinder.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CompleteUserRegistrationDTO {

    private String firstname;
    private String phone;
    private Long cityId;

}
