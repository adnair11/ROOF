package com.ibm.roof.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.net.URI;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.roof.model.Property;
import com.ibm.roof.model.ResponseMessage;
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
	public ResponseEntity<ResponseMessage> add(@RequestBody @Valid Property property)
	{
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Employee Added successfully"});
		roofService.addProperty(property);
		System.out.println("inisde put");
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(property.get_id()).toUri();
		return ResponseEntity.created(location).body(res);
		
		
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
	public ResponseEntity<ResponseMessage> updateProperty(@PathVariable String id, @RequestBody Property updatedProp) {
		updatedProp.set_id(id);
		roofService.update(updatedProp);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Employee Updated successfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
		return ResponseEntity.created(location).body(res);
		
	}
	
	@DeleteMapping(value="/{id}")
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> deleteProperty(@PathVariable String id) {
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Employee deleted successfully"});
		roofService.delete(id);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
		return ResponseEntity.created(location).body(res);
//		return "Property deleted successfully";
	}
	

	
	@GetMapping(value="/{id}",produces= {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public Property getById(@PathVariable String id)
	{
		return roofService.getById(id);
	}
	
	

}
