package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;

import java.util.List;

public interface StockService {
    void saveStock (Stok stok);
    Stok findById(String idStok);
    List<Stok> findAll();
}
