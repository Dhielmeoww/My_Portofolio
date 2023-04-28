package com.uniclo.service;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniclo.model.Uniclo;
import com.uniclo.repo.UnicloRepository;

@Service
public class UnicloService {
	@Autowired
	private UnicloRepository uncRepository;
	public List<Uniclo> getAllItem(){
		List<Uniclo> uncList = new ArrayList<>();
		uncRepository.findAll().forEach(uncList::add);
		return uncList;
	}
	
	public Uniclo getItem(int id){
		return uncRepository.findById(id).get();
	}
	
	public void insert (Uniclo unc) {
		uncRepository.save(unc);
	}
	
	public void deleteById (int id) {
		uncRepository.deleteById(id);
	}
	
	public void update (Uniclo unc, int id) {
		Uniclo uncById = uncRepository.findById(id).get();
		uncById.setName(unc.getName());
		uncById.setType(unc.getType());
		uncById.setDesc(unc.getDesc());
		uncById.setPrice(unc.getPrice());
		uncById.setImgUrl(unc.getImgUrl());
		uncRepository.save(uncById);	
	}
}