package com.example.projectfinal.projectfinal.Controller;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;
import com.example.projectfinal.projectfinal.Service.ProductService;
import com.example.projectfinal.projectfinal.Service.StockService;
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
public class StockController {
    public static final Logger logger = LoggerFactory.getLogger(StockController.class);
    @Autowired
    StockService stockService;

    @PostMapping("/stock")
    public ResponseEntity<?> createStock(@Valid @RequestBody Stok stok) {
        List<Product> products = stok.getProductList();
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getProductId().isBlank()) {
                return new ResponseEntity<>(new CustomErrorType("Please enter product !"), HttpStatus.NOT_FOUND);
            } else if (products.get(i).getTglExpiredProduct().isBlank()) {
                return new ResponseEntity<>(new CustomErrorType("Please enter expired date !"), HttpStatus.NOT_FOUND);
            } else if (products.get(i).getHarga() <= 0) {
                return new ResponseEntity<>(new CustomErrorType("Please enter price !"), HttpStatus.NOT_FOUND);
            } else if (products.get(i).getTransTypeProduct() <= 0) {
                return new ResponseEntity<>(new CustomErrorType("Please enter trans type !"), HttpStatus.NOT_FOUND);
            } else if (products.get(i).getProductQty() <= 0) {
                return new ResponseEntity<>(new CustomErrorType("Please enter product qty !"), HttpStatus.NOT_FOUND);
            }
        }
        stockService.saveStock(stok);
        return new ResponseEntity<>(new CustomSuccessType("Save stock successfully"), HttpStatus.NOT_FOUND);

    }

    @GetMapping("/stock")
    public ResponseEntity<List<Stok>> listAllStoks() {
        List<Stok> stoks = stockService.findAll();
        if (stoks.isEmpty()) {
            return new ResponseEntity<>(stoks, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(stoks, HttpStatus.OK);
        }
    }
}
