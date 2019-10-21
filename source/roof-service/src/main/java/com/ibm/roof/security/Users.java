package com.ibm.roof.security;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Users {
	@Id
	ObjectId _id;
	String name;
	String password;
	
	String role;
	
	
	
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

	
	
	
	

}
