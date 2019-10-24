package com.ibm.roof.model;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@XmlRootElement
public class Booking {
	
	
	@Id
	String bookingId;
	String propertyId;
	String ownerId;
	String renterId;
	Date fromDate;
	Date toDate;
	
	
	
	public Booking(String bookingId, String propertyId, String ownerId, String renterId, Date fromDate, Date toDate) {
		super();
		this.bookingId = bookingId;
		this.propertyId = propertyId;
		this.ownerId = ownerId;
		this.renterId = renterId;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}
	
	public String getBookingId() {
		return bookingId;
	}

	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}

	public String getPropertyId() {
		return propertyId;
	}
	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}
	public String getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
	}
	public String getRenterId() {
		return renterId;
	}
	public void setRenterId(String renterId) {
		this.renterId = renterId;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", propertyId=" + propertyId + ", ownerId=" + ownerId + ", renterId="
				+ renterId + ", fromDate=" + fromDate + ", toDate=" + toDate + "]";
	}
	
	
}
