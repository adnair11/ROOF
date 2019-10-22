package com.ibm.roof.model;

import java.util.Date;

public class Booking {
	int renteeId;
	boolean bookingStatus;
	Date fromDate;
	Date toDate;
	public int getRenteeId() {
		return renteeId;
	}
	public void setRenteeId(int renteeId) {
		this.renteeId = renteeId;
	}
	public boolean isBookingStatus() {
		return bookingStatus;
	}
	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
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
	
	public Booking() {
		this.bookingStatus = false;
	}
	
	public Booking(int renteeId, boolean bookingStatus, Date fromDate, Date toDate) {
		super();
		this.renteeId = renteeId;
		this.bookingStatus = bookingStatus;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}
	
	
	
	

}
