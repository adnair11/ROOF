package com.ibm.roof.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ibm.roof.model.Property;
import com.ibm.roof.repository.*;
import com.ibm.roof.security.UserRepository;
import com.ibm.roof.security.Users;


@Service
public class RoofService {
	
	@Autowired
	RoofRepository propertyRepo;
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	
	public boolean addProperty(Property property)
	{
		propertyRepo.insert(property);
		System.out.println("addProp");
		return true;
		
	}
	
	
	public List<Property> getAll()
	{
		System.out.println("addProp");
		 
		return propertyRepo.findAll();
		
	}
	
	public List<Property> getByUsrId(String id)
	{
		return propertyRepo.getByUsrId(id);
	}


	
	
	public boolean update(Property updatedProp) {
		// TODO Auto-generated method stub
		propertyRepo.save(updatedProp);
		return true;
		
	}

	public boolean delete(String id) {
		// TODO Auto-generated method stub
		propertyRepo.deleteById(id);
		return true;
		
	}
	
	public Property getById(String id) {
		// TODO Auto-generated method stub
		return propertyRepo.getBy_id(id);
	}


	public List getByLocation(String city) {
		// TODO Auto-generated method stub
		return propertyRepo.getByCity(city);
	}
	
	


	public List getByBhk(String city, Optional<Integer> bhk) {
		// TODO Auto-generated method stub
		return propertyRepo.getByCityAndBhk(city,bhk);
	}


	public void updatePassword(String name, String password) {
		// TODO Auto-generated method stub
		Users user = userRepo.findByName(name);
		user.setPassword(encoder.encode(password));
		userRepo.save(user);
		
	}




	

}
