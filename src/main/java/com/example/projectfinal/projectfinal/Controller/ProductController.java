package com.example.projectfinal.projectfinal.Controller;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.User;
import com.example.projectfinal.projectfinal.Service.ProductService;
import com.example.projectfinal.projectfinal.Util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
            return new ResponseEntity<>(new CustomErrorType("Unable to create, product already" + product.getProductName()), HttpStatus.CONFLICT);
        } else {
            productService.saveProduct(product);
            return new ResponseEntity<>(new CustomErrorType("The product has been successfully saved"), HttpStatus.OK);
        }
    }
}
