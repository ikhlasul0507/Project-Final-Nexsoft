package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ProductService")
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    public void saveProduct(Product product) {
        synchronized (this) {
            productRepository.saveProduct(product);
        }
    }

    public boolean isProductExist(Product product) {
        return productRepository.findByName(product.getProductName()).size() != 0;
    }

    @Override
    public Product findByName(String productName) {
        return productRepository.findByName(productName).get(0);
    }
    public Product findById(String productId) {
        Product dh;
        try{
            dh = productRepository.findById(productId);
        }catch (EmptyResultDataAccessException e){
            System.out.println(e);
            dh = null;
        }
        return dh;
    }
    @Override
    public List<Product> findAll() {
        List<Product> products = productRepository.findAll();
        return products;
    }
    public int findAllCount() {
        int products = productRepository.findAllCount();
        return products;
    }
    public void deleteProductById(String productId) {
        synchronized (this) {
            productRepository.deleteProductById(productId);
        }
    }
    public void updateProduct(Product product) {
        synchronized (this) {
            productRepository.updateProduct(product);
        }
    }
    public List<Product> findWithPaging(int page, int limit, String orderby, int minus) {
        return productRepository.findWithPaging(page, limit,orderby, minus);
    }

}
