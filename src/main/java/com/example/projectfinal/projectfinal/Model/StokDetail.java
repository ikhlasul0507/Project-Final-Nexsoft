package com.example.projectfinal.projectfinal.Model;

import javax.validation.constraints.NotBlank;

public class StokDetail {
    private String idDetailStok;
    private String idStok;
    private String idProduct;
    @NotBlank(message = "Product expired date may not be blank")
    private String tglExpiredProduct;
    @NotBlank(message = "Product price may not be blank")
    private int harga;
    @NotBlank(message = "Product transtype date may not be blank")
    private int transTypeProduct;
    @NotBlank(message = "Product qty may not be blank")
    private int productQty;

    public StokDetail(String idDetailStok, String idStok, String idProduct, String tglExpiredProduct, int harga, int transTypeProduct, int productQty) {
        this.idDetailStok = idDetailStok;
        this.idStok = idStok;
        this.idProduct = idProduct;
        this.tglExpiredProduct = tglExpiredProduct;
        this.harga = harga;
        this.transTypeProduct = transTypeProduct;
        this.productQty = productQty;
    }

    public String getIdDetailStok() {
        return idDetailStok;
    }

    public void setIdDetailStok(String idDetailStok) {
        this.idDetailStok = idDetailStok;
    }

    public String getIdStok() {
        return idStok;
    }

    public void setIdStok(String idStok) {
        this.idStok = idStok;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
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

    public int getProductQty() {
        return productQty;
    }

    public void setProductQty(int productQty) {
        this.productQty = productQty;
    }
}
