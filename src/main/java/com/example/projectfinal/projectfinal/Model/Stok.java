package com.example.projectfinal.projectfinal.Model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class Stok {
    private String idStok;
    @NotBlank(message = "Document date may not be blank")
    private String tanggaDokumen;
    @NotBlank(message = "Document description may not be blank")
    @Pattern(regexp="[a-zA-Z0-9\\s]+",message="Product description must use letter characters")
    private String deskripsiDokumen;
    List<Product> productList;

    public Stok(String idStok, String tanggaDokumen, String deskripsiDokumen) {
        this.idStok = idStok;
        this.tanggaDokumen = tanggaDokumen;
        this.deskripsiDokumen = deskripsiDokumen;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public String getIdStok() {
        return idStok;
    }

    public void setIdStok(String idStok) {
        this.idStok = idStok;
    }

    public String getTanggaDokumen() {
        return tanggaDokumen;
    }

    public void setTanggaDokumen(String tanggaDokumen) {
        this.tanggaDokumen = tanggaDokumen;
    }

    public String getDeskripsiDokumen() {
        return deskripsiDokumen;
    }

    public void setDeskripsiDokumen(String deskripsiDokumen) {
        this.deskripsiDokumen = deskripsiDokumen;
    }
}
