package com.ibm.roof.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.roof.model.*;

public interface RoofRepository extends MongoRepository<Property,Object>
{

	List getByCity(String city);
	List getByCityAndBhk(String city, Optional<Integer> bhk);
	List getByUsrId(String usrId);

}
