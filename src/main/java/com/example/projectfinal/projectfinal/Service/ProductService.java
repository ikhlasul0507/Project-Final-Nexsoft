package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;

import java.util.List;

public interface ProductService {
    Product findById(String productId);
    List<Product> findAll();
    void saveProduct (Product product);
    boolean isProductExist(Product product);
    void deleteProductById(String productId);
    Product findByName(String productName);
    void updateProduct(Product product);
}
