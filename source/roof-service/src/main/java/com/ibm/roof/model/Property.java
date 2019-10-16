package com.ibm.roof.model;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
@XmlRootElement
public class Property {
	String name;
	int bhk;
	String city;
	
	
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
	public Property(String name, int bhk, String city) {
		super();
		this.name = name;
		this.bhk = bhk;
		this.city = city;
	}
	
	
	
	
	
	
	



}


