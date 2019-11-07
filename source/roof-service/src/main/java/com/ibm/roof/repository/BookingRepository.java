package com.ibm.roof.repository;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.roof.model.Booking;
import com.ibm.roof.model.Property;

public interface BookingRepository extends MongoRepository<Booking,Object>{

	List getByBookingId(String bookingId);
	List getByPropertyId(String propertyId);
	
	List getByUsrId(String usrId);
	List getByOwnerId(String ownerId);
	

}
