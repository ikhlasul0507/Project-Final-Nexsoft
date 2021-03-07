package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;

import java.util.List;

public interface ProductRepository {
    void saveProduct(Product product);
    List<Product> findByName(String productName);
    List<Product> findAll();
    Product findById(String productId);
    void deleteProductById(String productId);
    void updateProduct(Product product);
}
