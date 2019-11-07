package com.ibm.roof.security;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Users {
	@Id
	ObjectId _id;
	@Indexed(unique=true)
	String name;
	String password;
	String firstName;
	String lastName;
	String email;
	long  contact;
	String role;
	String city;
	String country;
	String state;
	int pincode;
	String securityqn;
	String answer;
	
		
		
	public String getSecurityqn() {
		return securityqn;
	}
	public void setSecurityqn(String securityqn) {
		this.securityqn = securityqn;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public Users(ObjectId _id, String name, String password, String firstName, String lastName, String email,
		long contact, String role, String city, String country, String state, int pincode) {
		super();
		this._id = _id;
		this.name = name;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contact = contact;
		this.role = role;
		this.city = city;
		this.country = country;
		this.state = state;
		this.pincode = pincode;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long phoneNo) {
		this.contact = phoneNo;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String get_id() {
		return _id.toHexString();
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}
	public void setName(String username) {
		this.name = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

	  public Users() {}
	public Users(ObjectId _id, String name, String password, String role) {
		super();
		this._id = _id;
		this.name = name;
		this.password = password;
		this.role = role;
	}
	@Override
	public String toString() {
		return "Users [_id=" + _id + ", name=" + name + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", contact=" + contact + ", role=" + role + ", city="
				+ city + ", country=" + country + ", state=" + state + ", pincode=" + pincode + "]";
	}

	
	
	
	

}
