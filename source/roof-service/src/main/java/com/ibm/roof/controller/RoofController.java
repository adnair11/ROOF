package com.ibm.roof.controller;

import org.springframework.http.MediaType;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.roof.model.Property;
import com.ibm.roof.service.RoofService;

@RestController
@RequestMapping("/properties")
public class RoofController {
	
	@Autowired
	RoofService roofService;
//	@Autowired
//	RoofRepository roofRepo;
	
	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
	@CrossOrigin("*")
	public String add(@RequestBody @Valid Property property)
	{
		
		roofService.addProperty(property);
		System.out.println("inisde put");
		return "YOUR PROPERTY HAS BEEN LISTED";
		
		
	}
	
	@GetMapping()
	@CrossOrigin("*")
	public List<Property> getAllProperties()
	{
		
		System.out.println("inside get");
		return roofService.getAll();
		
	}
	
	

}
