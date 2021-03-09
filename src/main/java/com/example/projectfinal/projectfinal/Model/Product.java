package com.example.projectfinal.projectfinal.Model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class Product {
    private String productId;
    @NotBlank(message = "Product name may not be blank")
    @Pattern(regexp="[a-zA-Z\\s]+",message="Product names must use letter characters")
    private String productName;
    @NotBlank(message = "Product description may not be blank")
    @Pattern(regexp="[a-zA-Z\\s]+",message="Product description must use letter characters")
    private String productDescription;
    @NotBlank(message = "Product description may not be blank")
    private int productQty;
    @NotBlank(message = "Product qty may not be blank")
    private String tglExpiredProduct;
    @NotEmpty(message = "Product expired date may not be blank")
    @Size(min = 0)
    private int harga;
    @NotBlank(message = "Product price may not be blank")
    private int transTypeProduct;

    public Product(){

    }
    public Product(String productId, String productName, String productDescription, int productQty) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productQty = productQty;
    }

    public Product(String productId,String productName, String productDescription, int productQty, String tglExpiredProduct, int harga, int transTypeProduct) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productQty = productQty;
        this.tglExpiredProduct = tglExpiredProduct;
        this.harga = harga;
        this.transTypeProduct = transTypeProduct;
    }

    public String getTglExpiredProduct() {
        return tglExpiredProduct;
    }

    public void setTglExpiredProduct(String tglExpiredProduct) {
        this.tglExpiredProduct = tglExpiredProduct;
    }

    public int getHarga() {
        return harga;
    }

    public void setHarga(int harga) {
        this.harga = harga;
    }

    public int getTransTypeProduct() {
        return transTypeProduct;
    }

    public void setTransTypeProduct(int transTypeProduct) {
        this.transTypeProduct = transTypeProduct;
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

