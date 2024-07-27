package com.pedtinder.backend.dtos;

import lombok.Data;

@Data
public class CompleteUserRegistrationDTO {

    private String firstname;
    private String phone;
    private Long cityId;

}
