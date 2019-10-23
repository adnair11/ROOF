package com.ibm.roof.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
//@EnableConfigurationProperties
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	  MongoUserDetailsService userDetailsService;
	  
	  @Override
	  protected void configure(HttpSecurity http) throws Exception {
		  System.out.println("Security Configuration...");
	    http
	      .csrf().disable()
	      .authorizeRequests()
	      .antMatchers("/properties/**").permitAll()
	      .antMatchers("/user/register").permitAll()
//	      .antMatchers("/rentor/properties/**").permitAll()
	      .antMatchers("/user/auth").permitAll()
//	      .antMatchers("/**").permitAll()
	      .anyRequest().permitAll()
	      .and().httpBasic()
	      .and().formLogin();
//	      .and().sessionManagement().disable();
	  }
	  
	  @Bean
	  public PasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	  }
	  
	
//	@Override
//	public void configure(AuthenticationManagerBuilder builder) throws Exception {
//		  builder.userDetailsService(userDetailsService);
//	}
  
	  

}
