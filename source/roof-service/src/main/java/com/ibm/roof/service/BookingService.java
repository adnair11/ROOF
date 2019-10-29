package com.ibm.roof.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ibm.roof.model.Booking;
import com.ibm.roof.model.ResponseMessage;
import com.ibm.roof.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository bookingRepository;
	
	public boolean bookProperty(Booking booking){
		bookingRepository.insert(booking);
		return true;
		
	}
	
	public List<Booking> getAll() {
		
			System.out.println("addProp");
			 
			return bookingRepository.findAll();
			
		
	}
	
	public List<Booking> getByPropertyId(String propertyId) {
		
		System.out.println("addProp");
		 
		return bookingRepository.getByPropertyId(propertyId);
		
	
}

	
	public List getbyUserId( String userId) {
		// TODO Auto-generated method stub
		return bookingRepository.getByUsrId(userId);
	}

	public List getbyOwnerId(String ownerId) {
		// TODO Auto-generated method stub
		return bookingRepository.getByOwnerId(ownerId);
	}
}
