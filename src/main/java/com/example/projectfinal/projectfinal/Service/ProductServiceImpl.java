package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;
import com.example.projectfinal.projectfinal.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ProductService")
public class ProductServiceImpl  implements  ProductService{
    @Autowired
    ProductRepository productRepository;
    public void saveProduct(Product product) {
        synchronized (this) {
            productRepository.saveProduct(product);
        }
    }
    public boolean isProductExist(Product product){
        return productRepository.findByName(product.getProductName()).size() != 0;
    }
    @Override
    public Product findByName(String productName) {
        return (Product) productRepository.findByName(productName).get(0);
    }


}
