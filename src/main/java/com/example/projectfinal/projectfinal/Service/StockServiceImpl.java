package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;
import com.example.projectfinal.projectfinal.Model.StokDetail;
import com.example.projectfinal.projectfinal.Repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("StockService")
public class StockServiceImpl implements StockService{
    @Autowired
    StockRepository stockRepository;

    public void saveStock(Stok stok) {
        synchronized (this) {
            stockRepository.saveStock(stok);
        }
    }
    public Stok findById(String idStok) {
        Stok dh;
        try{
            dh = stockRepository.findById(idStok);
        }catch (EmptyResultDataAccessException e){
            System.out.println(e);
            dh = null;
        }
        return dh;
    }
    public List<Stok> findAll() {
        List<Stok> stoks = stockRepository.findAll();
        return stoks;
    }
}
