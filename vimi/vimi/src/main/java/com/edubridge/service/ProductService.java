package com.edubridge.service;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Producer;

import com.edubridge.model.Product;
import com.edubridge.model.User;

public interface ProductService {
	Product saveProduct(Product prod) ;
	List<Product> getAllProduct();
	
	void deleteProduct(Integer id);
	Product getProduct(Integer id);

}
