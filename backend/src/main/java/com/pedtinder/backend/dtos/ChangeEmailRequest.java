package com.pedtinder.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChangeEmailRequest {

    private String currentEmail;
    private String newEmail;
    private String confirmationEmail;

}
