package com.uniclo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import lombok.extern.log4j.Log4j2;

import com.uniclo.model.Uniclo;
import com.uniclo.service.UnicloService;

@RestController
@Log4j2
public class UnicloController {
	@Autowired
	private UnicloService uncService;
	
	@RequestMapping("/unc")
	public List<Uniclo> getAllItem(){
		System.out.println("getAllitem");
		return uncService.getAllItem();
	}
	
	@RequestMapping("/unc/{id}")
	public Uniclo getItem(@PathVariable int id) {
		return uncService.getItem(id);
	}
	
	@RequestMapping(value = "/unc", method = RequestMethod.POST)
	public void insertUnc(@RequestBody Uniclo unc) {
		uncService.insert(unc);
	}
	
	@RequestMapping(value = "/unc", method = RequestMethod.PUT)
	public void editUnc(@RequestParam int id, @RequestBody Uniclo unc) {
		uncService.update(unc, id);
	}
	
	@RequestMapping(value = "/unc", method = RequestMethod.DELETE)
	public void deleteUnc(@RequestParam int id) {
		uncService.deleteById(id);
	}
	
	@RequestMapping("/logging")
	public String index() {
		log.trace("A TRACE Message");
        log.debug("A DEBUG Message");
        log.info("An INFO Message");
        log.warn("A WARN Message");
        log.error("An ERROR Message");

        return "Howdy! Check out the Logs to see the output...";
	}
}