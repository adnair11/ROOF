package com.ibm.roof.controller;

import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.roof.model.Booking;
import com.ibm.roof.model.Property;
import com.ibm.roof.model.ResponseMessage;
import com.ibm.roof.security.Users;
import com.ibm.roof.service.BookingService;
import com.ibm.roof.service.RoofService;

@RestController("/book")
@CrossOrigin("*")
public class BookingController {
	
	@Autowired
	BookingService bookingService;
	
//	@PostMapping(value="/check",consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
//	@CrossOrigin("*")
//	public ResponseEntity<ResponseMessage> check(@RequestBody @Valid Booking booking) throws ParseException
//	{
//		ResponseMessage res = null;
//		
//		
//		
//		
//		List l1=bookingService.getByPropertyId("124443");
//		
//		for(int i=0;i<l1.size();i++) {
//			Date propertyFromDate = ((com.ibm.roof.model.Booking) l1.get(i)).getFromDate();
//			Date propertyToDate = ((com.ibm.roof.model.Booking) l1.get(i)).getToDate();
//			String sDate1="25/10/2019";
//			String sDate2="28/10/2019"; 
//			Date userFromDate = new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);
//			Date userToDate = new SimpleDateFormat("dd/MM/yyyy").parse(sDate2);
//			System.out.println("---------------------------------------");
//			System.out.println(propertyFromDate);
//			System.out.println(propertyToDate);
//			System.out.println(userFromDate);
//			System.out.println(userToDate);
//			
//			if (((propertyToDate.compareTo(userFromDate) > 0 && propertyToDate.compareTo(userToDate)<0) )||
//					((userFromDate.compareTo(propertyFromDate) > 0 && userFromDate.compareTo(propertyToDate)<0))||
//					((userToDate.compareTo(propertyFromDate) > 0 && userToDate.compareTo(propertyToDate)<0))||
//					((propertyFromDate.compareTo(userFromDate) > 0 && propertyFromDate.compareTo(userToDate)<0))
//					) {
//	            System.out.println("already booked");
//	            res = new ResponseMessage("Success", new String[] {"already booked"});
//	          
//			
//						}
//		
//			}
//		
//		
//		
//		
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//				.buildAndExpand(booking.getBookingId()).toUri();
//		return ResponseEntity.created(location).body(res);
//		
//		
//	}
//	
//	
	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> add(@RequestBody @Valid Booking booking)
	{
		System.out.println("Booking-"+booking);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Booked successfully"});
		bookingService.bookProperty(booking);
		System.out.println("inisde booking controller");
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(booking.getBookingId()).toUri();
		return ResponseEntity.created(location).body(res);
		
		
	}
	
	
	
	
//	@GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
//	@CrossOrigin("*")
//	public <Booking>List getAllBookings(){
//		return bookingService.getAll();	
//	}
	
	@GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public <Booking>List getAllBookings() throws ParseException{
		List l1=bookingService.getByPropertyId("124443");
		
		for(int i=0;i<l1.size();i++) {
			Date propertyFromDate = ((com.ibm.roof.model.Booking) l1.get(i)).getFromDate();
			Date propertyToDate = ((com.ibm.roof.model.Booking) l1.get(i)).getToDate();
			String sDate1="25/10/2019";
			String sDate2="28/10/2019"; 
			Date userFromDate = new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);
			Date userToDate = new SimpleDateFormat("dd/MM/yyyy").parse(sDate2);
			System.out.println("---------------------------------------");
			System.out.println(propertyFromDate);
			System.out.println(propertyToDate);
			System.out.println(userFromDate);
			System.out.println(userToDate);
			
			if (((propertyToDate.compareTo(userFromDate) > 0 && propertyToDate.compareTo(userToDate)<0) )||
					((userFromDate.compareTo(propertyFromDate) > 0 && userFromDate.compareTo(propertyToDate)<0))||
					((userToDate.compareTo(propertyFromDate) > 0 && userToDate.compareTo(propertyToDate)<0))||
					((propertyFromDate.compareTo(userFromDate) > 0 && propertyFromDate.compareTo(userToDate)<0))

					) {
	            System.out.println("already booked");
	            break;
			
		}
		
		}
		
		return bookingService.getByPropertyId("124443");
	}
	

}
