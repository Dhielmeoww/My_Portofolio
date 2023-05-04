package com.uniclo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.uniclo.model.Uniclo;

public interface UnicloRepository extends CrudRepository<Uniclo, Integer>{
    
    List<Uniclo> findByNameContains(String name);
}
