package com.ibm.roof.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import com.ibm.roof.security.*;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.security.Principal;
import java.text.ParseException;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.roof.model.Booking;
import com.ibm.roof.model.Property;
import com.ibm.roof.model.ResponseMessage;
import com.ibm.roof.model.Review;
import com.ibm.roof.security.UserRepository;
import com.ibm.roof.security.Users;
import com.ibm.roof.service.BookingService;
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
	
	@Autowired
	BookingService bookingService;
	
	long propertyId;
	int noOfImages;
	
	@RequestMapping(value="/upload", method=RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<ResponseMessage> uploadFile(@RequestBody MultipartFile[] file) throws IOException {
//		System.out.println("hello piyush i am here");
//		new File("C:\\piyush\\"+propertyId).mkdir();
//		
//		File directory=new File("C:\\piyush\\"+propertyId);
//	    int fileCount=directory.list().length;
//	    System.out.println("File Count:"+fileCount);
//	    
//		File convertFile = new File("C:\\piyush\\"+propertyId+"\\"+fileCount+".png");
//		
//		
		propertyId=(long) ((Math.random() * ((10000 - 0) + 1)) + 0);
		System.out.println("file length = "+file.length);
		System.out.println("hello piyush");
		noOfImages=file.length;
		for(MultipartFile uploadedFile : file) {
			new File("C:\\piyush\\"+propertyId).mkdir();
			File directory=new File("C:\\piyush\\"+propertyId);
			int fileCount=directory.list().length;
			System.out.println("File Count:"+fileCount);
			System.out.println(uploadedFile.getOriginalFilename());
			File convertFile = new File("C:\\piyush\\"+propertyId+"\\"+fileCount+".png");
//            File convertFile = new File(uploadingDir + uploadedFile.getOriginalFilename());
            uploadedFile.transferTo(convertFile);
        }
		
		
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Image Upload sucessfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(1).toUri();
		return ResponseEntity.created(location).body(res);
		
		
//		return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);
	}
	
	@PostMapping(value="/review",consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE})
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> addReview(@RequestBody Review reviews)
	{
		System.out.println(reviews);
		String id= reviews.getPropertyId();
		System.out.println("Id-"+id);
		Property p = roofService.getById(id);
		System.out.println(p);
		p.setReviews(reviews);
		roofService.update(p);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Reviews added successfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(reviews.getPropertyId()).toUri();
		return ResponseEntity.created(location).body(res);
		
	}
	

	@GetMapping(value="user/book{userId}",produces = {MediaType.APPLICATION_JSON_VALUE})
	public <Booking>List getBookingByUserId(@PathVariable("userId") String userId) 

	
	{
		System.out.println("userId-"+userId);
		System.out.println("Inside user/book controller");
		return bookingService.getbyUserId(userId);
		
	}
	
	

	@GetMapping(value="user/properties/book{ownerId}",produces = {MediaType.APPLICATION_JSON_VALUE})
	public <Booking>List getBookingByOwnerId(@PathVariable("ownerId") String ownerId) 
	
	{
		System.out.println("ownerId-"+ownerId);
		System.out.println("Inside user/properties/book controller");
		return bookingService.getbyOwnerId(ownerId);
		
	}
	
	@PostMapping(value="/check",consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> check(@RequestBody @Valid Booking booking) throws ParseException
	{
		ResponseMessage res = null;
				
		
		System.out.println(booking.getPropertyId());
		List l1=bookingService.getByPropertyId(booking.getPropertyId());
		int sizex =l1.size();
		if(sizex==0) {
			 res = new ResponseMessage("Success", new String[] {"available for booking"});
		}
		else {
		for(int i=0;i<l1.size();i++) {
			
			Date propertyFromDate = ((com.ibm.roof.model.Booking) l1.get(i)).getFromDate();
			Date propertyToDate = ((com.ibm.roof.model.Booking) l1.get(i)).getToDate();
			Date userFromDate = booking.getFromDate();
			Date userToDate = booking.getToDate();
			System.out.println("---------------------------------------");
			System.out.println(propertyFromDate);
			System.out.println(propertyToDate);
			System.out.println(userFromDate);
			System.out.println(userToDate);
			Date currDate = new Date();
			
			if (((propertyToDate.compareTo(userFromDate) >= 0 && propertyToDate.compareTo(userToDate)<=0) )||
					((userFromDate.compareTo(propertyFromDate) >= 0 && userFromDate.compareTo(propertyToDate)<=0))||
					((userToDate.compareTo(propertyFromDate) >= 0 && userToDate.compareTo(propertyToDate)<=0))||
					((propertyFromDate.compareTo(userFromDate) >= 0 && propertyFromDate.compareTo(userToDate)<=0))||
					((userFromDate.compareTo(currDate)<0))
					) {
	            System.out.println("already booked");

	            System.out.println("curr date is"+currDate);
	            res = new ResponseMessage("Failure", new String[] {"already booked"});

	           
	            break;
	          
			
						}
			else {
				 res = new ResponseMessage("Success", new String[] {"available for booking"});
			}
			
		
			}
		
		}
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(booking.getBookingId()).toUri();
		return ResponseEntity.created(location).body(res);
		
		
	}

	
	
	@PostMapping(value="/properties",consumes = { MediaType.APPLICATION_JSON_VALUE ,MediaType.ALL_VALUE} )
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> add(@RequestBody @Valid Property property)
	{
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Property Added successfully"});
		property.setImageFolder(propertyId);
		property.setNoOfImages(noOfImages);
		roofService.addProperty(property);
		System.out.println("inisde add");
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
		user.setSecurityqn(user.getSecurityqn());
		user.setAnswer(user.getAnswer());
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
	public Users getUserById(@PathVariable("id") String id)
	{
		System.out.println("In user login");
		return userRepo.findByName(id);
		
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
	
	
	@GetMapping(value="allproperties",produces = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public <Property>List getAllProperties(){
	
		return roofService.getAll();
	}
	
	
	
	
	
//	get all property of only user	
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
//	update property of user by ID	
	@PutMapping(value="properties/{id}")
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> updateProperty(@PathVariable String id, @RequestBody Property updatedProp) {
		updatedProp.set_id(id);
		System.out.println("update prop-"+updatedProp);
		roofService.update(updatedProp);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Property Updated successfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
		return ResponseEntity.created(location).body(res);
		
	}
//	delete property of user by ID	
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
	
	
	
	
//	get property of user by ID
	
	@GetMapping(value="rentor/properties/{id}",produces= {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin("*")
	public Property getById(@PathVariable String id)
	{
		System.out.println("hello piyush");
		System.out.println(roofService.getById(id));
		return roofService.getById(id);
	}
	
	@PutMapping(value="forgot/{id}")
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> updateUser(@PathVariable String id, @RequestBody String password) {
		roofService.updatePassword(id,password);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"Password Updated successfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
		return ResponseEntity.created(location).body(res);
		
	}
	
	@PutMapping(value="user/edit/{id}")
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> updateUser(@PathVariable String id, @RequestBody Users updatedUser) {
		updatedUser.setName(id);
		userRepo.save(updatedUser);
		ResponseMessage res;
		res = new ResponseMessage("Success", new String[] {"User Updated successfully"});
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(id).toUri();
		return ResponseEntity.created(location).body(res);
		
	}
	
	
	
	
	


}
