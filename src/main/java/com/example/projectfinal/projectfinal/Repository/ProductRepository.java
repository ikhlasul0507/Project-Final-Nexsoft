package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.Product;

import java.util.List;

public interface ProductRepository {
    void saveProduct(Product product);
    List<Product> findByName(String productName);
}
