package com.ibm.roof.model;

import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



public class Review {
	

//	String reviewId;
	String usrId;
	String propertyId;
	String text;
//	public String getReviewId() {
//		return reviewId;
//	}
//	public void setReviewId(String reviewId) {
//		this.reviewId = reviewId;
//	}
	public String getUsrId() {
		return usrId;
	}
	public void setUsrId(String usrId) {
		this.usrId = usrId;
	}
	public String getPropertyId() {
		return propertyId;
	}
	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	

}
