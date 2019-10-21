package com.ibm.roof.security;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class MongoUserDetailsService implements UserDetailsService {
	
	 @Autowired
	  private UserRepository repository;
	 
     @Override
	  public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
	    Users user = repository.findByName(name);
	    System.out.print("heloo"+name);

	    if(user == null) {
	      throw new UsernameNotFoundException("User not found");
	    }

//	    List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
	    
	    System.out.println( new User(user.getName(), user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_" + user.getRole())));
	    return new User(user.getName(), user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_" + user.getRole()));

//	    return new User(user.getName(), user.getPassword(), authorities);
	  }

}
