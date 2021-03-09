package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.Product;

import java.util.List;

public interface ProductRepository {
    void saveProduct(Product product);
    List<Product> findByName(String productName);
    List<Product> findAll();
    int findAllCount();
    Product findById(String productId);
    void deleteProductById(String productId);
    void updateProduct(Product product);
    List<Product> findWithPaging(int page, int limit, String orderby,int minus);
}
