package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;

import java.util.List;

public interface ProductService {
    void saveProduct (Product product);
    boolean isProductExist(Product product);
    Product findByName(String productName);
}
