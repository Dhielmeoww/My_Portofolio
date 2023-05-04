package com.uniclo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniclo.model.Uniclo;
import com.uniclo.service.UnicloService;

@RestController
@RequestMapping("api/items")
public class ServletInit {
    
    @Autowired
    private UnicloService unicloService;

    @PostMapping
    public Uniclo create(@RequestBody Uniclo unc){
        return unicloService.save(unc);
    }

    @GetMapping
    public Iterable<Uniclo> findAll(){
        return unicloService.findAll();
    }

    @GetMapping("/{id}")
    public Uniclo fineOne(@PathVariable("id") int id){
        return unicloService.findOne(id);
    }

    @PutMapping
    public Uniclo update(@RequestBody Uniclo unc){
        return unicloService.save(unc);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id){
        unicloService.delete(id);
    }
}
