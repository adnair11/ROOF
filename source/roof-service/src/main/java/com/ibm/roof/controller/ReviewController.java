package com.ibm.roof.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.roof.model.Property;
import com.ibm.roof.model.ResponseMessage;
import com.ibm.roof.model.Review;
import com.ibm.roof.service.RoofService;

//@RestController("/book/review")
@CrossOrigin("*")
public class ReviewController {
	@Autowired
	RoofService roofService;
	
	

	
	


}
