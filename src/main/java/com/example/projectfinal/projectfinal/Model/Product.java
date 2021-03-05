package com.example.projectfinal.projectfinal.Model;

import javax.validation.constraints.NotBlank;

public class Product {
    private String productId;
    @NotBlank(message = "Product name may not be blank")
    private String productName;
    @NotBlank(message = "Product description may not be blank")
    private String productDescription;
    private int productQty;

    public Product(String productId, String productName, String productDescription, int productQty) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productQty = productQty;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public int getProductQty() {
        return productQty;
    }

    public void setProductQty(int productQty) {
        this.productQty = productQty;
    }
}

