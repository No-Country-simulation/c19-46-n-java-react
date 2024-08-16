package com.pedtinder.backend.controladores;


import com.pedtinder.backend.entidades.Size;
import com.pedtinder.backend.servicios.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sizes")
public class SizeController {

    @Autowired
    private SizeService sizeService;

    @GetMapping
    public List<Size> getSizes() {
        return sizeService.getSizes();
    }
}
