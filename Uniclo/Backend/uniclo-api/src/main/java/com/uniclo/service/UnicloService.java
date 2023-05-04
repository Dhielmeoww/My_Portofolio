package com.uniclo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.uniclo.model.Uniclo;
import com.uniclo.repository.UnicloRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UnicloService {
    
    @Autowired
    private UnicloRepository unicloRepo;

    public Uniclo save(Uniclo unc){
        return unicloRepo.save(unc);
    }

    public Iterable<Uniclo> findAll(){
        return unicloRepo.findAll();
    }

    public Uniclo findOne(int id){
        return unicloRepo.findById(id).get();
    }

    public void delete(int id){
        unicloRepo.deleteById(id);
    }

    public List<Uniclo> findByName(String name){
        return unicloRepo.findByNameContains(name);
    }
}
