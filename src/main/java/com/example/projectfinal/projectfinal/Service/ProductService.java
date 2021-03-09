package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;

import java.util.List;

public interface ProductService {
    Product findById(String productId);
    List<Product> findAll();
    int findAllCount();
    void saveProduct (Product product);
    boolean isProductExist(Product product);
    void deleteProductById(String productId);
    Product findByName(String productName);
    void updateProduct(Product product);
    List<Product> findWithPaging(int page, int limit, String orderby,int minus );
}
