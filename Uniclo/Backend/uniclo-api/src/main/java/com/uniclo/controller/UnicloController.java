package com.uniclo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UnicloController {
    
    @GetMapping
    public String welcome(){
        return "Ini API UNICLO";
    }

}
