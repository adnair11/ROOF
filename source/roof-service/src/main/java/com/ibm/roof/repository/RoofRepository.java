package com.ibm.roof.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.roof.model.*;

public interface RoofRepository extends MongoRepository<Property,Object>
{

}
