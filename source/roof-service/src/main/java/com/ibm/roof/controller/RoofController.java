package com.ibm.roof.controller;

import org.springframework.http.MediaType;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	
	
	@GetMapping(value="/rent/{city}",produces = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public <Property>List getByBHK(@PathVariable String city,@RequestParam("bhk") Optional<Integer> bhk){
		System.out.print("bhk is"+bhk);
		if(bhk.isPresent())
		return roofService.getByBhk(city,bhk);
		else
			return roofService.getByLocation(city);
	}
	
	@GetMapping()
	@CrossOrigin("*")
	public List<Property> getAllProperties()
	{
		
		System.out.println("inside get");
		return roofService.getAll();
		
	}
	
	@PutMapping(value="/{id}")
	@CrossOrigin("*")
	public String updateProperty(@PathVariable String id, @RequestBody Property updatedProp) {
		updatedProp.set_id(id);
		roofService.update(updatedProp);
		return "Property updated successfully";
	}
	
	@DeleteMapping(value="/{id}")
	@CrossOrigin("*")
	public String deleteProperty(@PathVariable String id) {
		roofService.delete(id);
		return "Property deleted successfully";
	}
	

	
	@GetMapping(value="/{id}",produces= {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public Property getById(@PathVariable String id)
	{
		return roofService.getById(id);
	}
	

	
	
	
	
	

}
