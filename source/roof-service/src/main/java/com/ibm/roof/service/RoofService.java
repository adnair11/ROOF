package com.ibm.roof.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.roof.model.Property;
import com.ibm.roof.repository.*;


@Service
public class RoofService {
	
	@Autowired
	RoofRepository propertyRepo;

	
	
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
	
	

}
