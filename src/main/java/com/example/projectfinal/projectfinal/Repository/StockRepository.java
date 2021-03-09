package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;

import java.util.List;

public interface StockRepository {
    void saveStock(Stok stok);
    Stok findById(String idStok);
    List<Stok> findAll();
}
