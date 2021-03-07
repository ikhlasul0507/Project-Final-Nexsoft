package com.example.projectfinal.projectfinal.Controller;
import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;
import com.example.projectfinal.projectfinal.Service.ProductService;
import com.example.projectfinal.projectfinal.Util.CustomErrorType;
import com.example.projectfinal.projectfinal.Util.CustomSuccessType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("nd6")
public class ProductController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    ProductService productService;
    @PostMapping("/product")
    public ResponseEntity<?> createUser(@Valid @RequestBody Product product) {
        if (productService.isProductExist(product)) {
            logger.error("Unable to create, product already exist", product.getProductName());
            return new ResponseEntity<>(new CustomErrorType("Unable to create, product already " + product.getProductName()), HttpStatus.CONFLICT);
        } else {
            productService.saveProduct(product);
            return new ResponseEntity<>(new CustomSuccessType("2"), HttpStatus.OK);
        }
    }
    @GetMapping("/product")
    public ResponseEntity<List<Product>> listAllProducts() {
        List<Product> products = productService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }
    @GetMapping("/product/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable("productId") String productId) {
        logger.info("Fetching product with id Product {}", productId);
        Product product = productService.findById(productId);
        if (product == null) {
            logger.error("Product with productId {} not found .", productId);
            return new ResponseEntity<>(new CustomErrorType("Prodcut with id " + productId + " not found"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }
    @GetMapping("/product/name/{productName}")
    public ResponseEntity<?> getProductByName(@PathVariable("productName") String productName) {
        logger.info("Fetching product with productName {}", productName);
        Product product = productService.findByName(productName);
        if (product == null) {
            logger.error("product with productName {} not found.", productName);
            return new ResponseEntity<>(new CustomErrorType("Product with productName " + productName + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @DeleteMapping("/product/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable("productId") String productId) {
        logger.info("Fetching & Deleting product with productId {}", productId);
        if (productId == null) {
            return new ResponseEntity<>(new CustomErrorType("id User not found."),
                    HttpStatus.NOT_FOUND);
        } else {
            Product product = productService.findById(productId);
            if (product == null) {
                logger.error("Unable to delete. product with product {} not found.", productId);
                return new ResponseEntity<>(new CustomErrorType("Unable to delete. product with product " + productId + " not found."),
                        HttpStatus.NOT_FOUND);
            } else {
                productService.deleteProductById(productId);
                return new ResponseEntity<>(new CustomSuccessType("The product has been successfully deleted"), HttpStatus.OK);
            }
        }
    }
    @PutMapping("/product/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable("productId") String productId, @RequestBody Product product) {
        logger.info("Updating product with productId {}", productId);
        Product product1 = productService.findById(productId);
        if (product1 == null) {
            logger.error("Unable to update. product with productId {} not found.", productId);
            return new ResponseEntity<>(new CustomErrorType("Unable to update. product with productId " + productId + " not found."),
                    HttpStatus.NOT_FOUND);
        }else {
            product1.setProductName(product.getProductName());
            product1.setProductDescription(product.getProductDescription());
            productService.updateProduct(product1);
            return new ResponseEntity<>(product1, HttpStatus.OK);
        }
    }
}
