package com.edubridge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edubridge.model.Product;

public interface ProductRepository extends JpaRepository<com.edubridge.model.Product, Integer> {
	

}
