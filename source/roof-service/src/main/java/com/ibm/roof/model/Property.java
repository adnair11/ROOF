package com.ibm.roof.model;

import java.util.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@XmlRootElement
public class Property {
	
	//Auto Generated Mongodb property id
	@Id
	String _id;
	
	
	//userid of current user
	String usrId;
	
	public String getUsrId() {
		return usrId;
	}
	public void setUsrId(String usrId) {
		this.usrId = usrId;
	}
	//Property details
	String name;
	int bhk;
	String type;
	int age;
	int floor;
	int totalFloors;
	int size;
	
	//locality details
	String city;
	String locality;
	
	//rental details
	float rent;
	float deposit;
	Date available;
	String prefTenant;
	String furnish;
	String parking;
	
	//Amenities 
	int bathrooms;
	int balconies;
	boolean lift;
	boolean ac;
	boolean internet;
	
	
	
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public int getTotalFloors() {
		return totalFloors;
	}
	public void setTotalFloors(int totalFloors) {
		this.totalFloors = totalFloors;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public float getRent() {
		return rent;
	}
	public void setRent(float rent) {
		this.rent = rent;
	}
	public float getDeposit() {
		return deposit;
	}
	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}
	public Date getAvailable() {
		return available;
	}
	public void setAvailable(Date available) {
		this.available = available;
	}
	public String getPrefTenant() {
		return prefTenant;
	}
	public void setPrefTenant(String prefTenant) {
		this.prefTenant = prefTenant;
	}
	public String getFurnish() {
		return furnish;
	}
	public void setFurnish(String furnish) {
		this.furnish = furnish;
	}
	public String getParking() {
		return parking;
	}
	public void setParking(String parking) {
		this.parking = parking;
	}
	public int getBathrooms() {
		return bathrooms;
	}
	public void setBathrooms(int bathrooms) {
		this.bathrooms = bathrooms;
	}
	public int getBalconies() {
		return balconies;
	}
	public void setBalconies(int balconies) {
		this.balconies = balconies;
	}
	public boolean isLift() {
		return lift;
	}
	public void setLift(boolean lift) {
		this.lift = lift;
	}
	public boolean isAc() {
		return ac;
	}
	public void setAc(boolean ac) {
		this.ac = ac;
	}
	public boolean isInternet() {
		return internet;
	}
	public void setInternet(boolean internet) {
		this.internet = internet;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getBhk() {
		return bhk;
	}
	public void setBhk(int bhk) {
		this.bhk = bhk;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public Property( String name, int bhk, String city) {
		super();
		
		this.name = name;
		this.bhk = bhk;
		this.city = city;
	}
	
	
	
	
	
	
	
	
	
	
	
	



}


