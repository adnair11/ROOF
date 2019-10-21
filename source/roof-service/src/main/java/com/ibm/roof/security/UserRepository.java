package com.ibm.roof.security;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users,String>
{
Users findBy_id(ObjectId _id);
Users findByName(String name);
}
