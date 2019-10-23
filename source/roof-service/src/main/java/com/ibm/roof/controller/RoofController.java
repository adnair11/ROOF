package com.ibm.roof.controller;

import org.springframework.http.MediaType;
import com.ibm.roof.security.*;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.net.URI;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.bson.types.ObjectId;
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
import com.ibm.roof.security.UserRepository;
import com.ibm.roof.security.Users;
import com.ibm.roof.service.RoofService;

@RestController
@CrossOrigin("*")
public class RoofController {
	
	@Autowired
	RoofService roofService;

	@Autowired
	UserRepository userRepo;
	

	@Autowired
	PasswordEncoder encoder;
	
	@PostMapping(value="/properties",consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
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
	

//	@GetMapping(value="/rentor/properties/{usrId}")
//	@CrossOrigin("*")
//	public List<Property> getUserProperties(@PathVariable String usrId)
//	{	
//		System.out.println("inside get");
//		return roofService.getByUsrId(usrId);
//	}
	
	
	//USER REGSITRATION
	
	@PostMapping(value="/user/register",consumes = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public Users createUser( @Valid @RequestBody Users user)
	{
		
		user.set_id(ObjectId.get());
		user.setPassword(encoder.encode(user.getPassword()));
		userRepo.save(user);
		return user;
		
	}

	//USER Authentication 
	@PostMapping(value="/user/auth")
	@CrossOrigin("*")
	public Principal authenticate(Principal user)
	{
		System.out.println("LoggedIn User: " + user);
		
		
		return user;
		
	}
	
	
	//USER LOGIN GET USER BY ID
	@GetMapping(value="/user/login/{id}",produces = {MediaType.APPLICATION_JSON_VALUE})
	public Users getUserById(@PathVariable("id") ObjectId id)
	{
		return userRepo.findBy_id(id);
		
	}
	
	
	
	
	
	@GetMapping(value="properties/{city}",produces = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public <Property>List getByBHK(@PathVariable String city,@RequestParam("bhk") Optional<Integer> bhk){
		System.out.print("bhk is"+bhk);
		if(bhk.isPresent())
		return roofService.getByBhk(city,bhk);
		else
			return roofService.getByLocation(city);
	}
	
	
	
	
	
	@GetMapping(value="/properties")
	@CrossOrigin("*")
	public List<Property> getAllProperties(@RequestParam("userId") String userId)
	{
		
		if(userId != null && userId.length() > 0) {
			// TODO: Logic to fetch properties for given user id
			
			return roofService.getByUsrId(userId);
		}
		
		System.out.println("inside get");
		return roofService.getAll();
		
	}
	
	@PutMapping(value="properties/{id}")
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
	
	@DeleteMapping(value="properties/{id}")
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
	
	
	
	

//	
	@GetMapping(value="rentor/properties/{id}",produces= {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public Property getById(@PathVariable String id)
	{
		System.out.println("hello piyush");
		System.out.println(roofService.getById(id));
		return roofService.getById(id);
	}
	
	

}
