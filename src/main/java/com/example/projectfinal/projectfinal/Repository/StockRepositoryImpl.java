package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;
import com.example.projectfinal.projectfinal.Model.StokDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository("StockRepository")
public class StockRepositoryImpl implements StockRepository {
    @Autowired
    private JdbcTemplate jpa;
    private Stok stok;
    private StokDetail stokDetail;

    public String getLastIDDOC() {
        int countUser;
        String lastIdDOC;
        countUser = jpa.queryForObject("SELECT COUNT(*) as count FROM tbl_header_stok", Integer.class);
        if (countUser == 0) {
            lastIdDOC = "STOK0000";
        } else {
            lastIdDOC = jpa.queryForObject("SELECT idStok FROM tbl_header_stok LIMIT 1 OFFSET " + (countUser - 1), String.class);
        }
        return lastIdDOC;
    }

    public Stok findById(String idStok) {
        String sql = "select * from tbl_header_stok WHERE idStok='" + idStok + "'";
        return jpa.queryForObject(sql,
                (rs, rowNum) ->
                        new Stok(
                                rs.getString("idStok"),
                                rs.getString("tanggalDokumen"),
                                rs.getString("deskripsiDokumen")
                        )
        );
    }

    public void saveStock(Stok stok) {
        String lastIDDOC = getLastIDDOC();
        int lastNumberDoc = Integer.parseInt(lastIDDOC.substring(4)) + 1;
        String numberDoc = String.valueOf(lastNumberDoc).length() == 1 ? "000" + String.valueOf(lastNumberDoc) :
                String.valueOf(lastNumberDoc).length() == 2 ? "00" + String.valueOf(lastNumberDoc) :
                        String.valueOf(lastNumberDoc).length() == 3 ? "0" + String.valueOf(lastNumberDoc) : String.valueOf(lastNumberDoc);
        String idStok = new String("STOK" + numberDoc);

        jpa.update("INSERT INTO tbl_header_stok(idStok,tanggalDokumen, deskripsiDokumen) VALUES (?,?,?)",
                idStok, stok.getTanggaDokumen(), stok.getDeskripsiDokumen());
        List<Product> products = stok.getProductList();
        for (int i = 0; i < products.size(); i++) {
            Product product = products.get(i);
            UUID uuid = UUID.randomUUID();
            String randomUUIDString = uuid.toString();
            int QtyProduct;
            QtyProduct = jpa.queryForObject("SELECT productQty FROM `tbl_product` WHERE productId='" + product.getProductId() + "'", Integer.class);
            int transProduct;
            transProduct = product.getTransTypeProduct();
            int updateQty = 0;
            if (transProduct == 0) {
                updateQty = QtyProduct + product.getProductQty();
            } else {
                if(QtyProduct > product.getProductQty()) {
                    updateQty = QtyProduct - product.getProductQty();
                }else{
                    updateQty = QtyProduct;
                }
            }
            jpa.update("INSERT INTO tbl_detail_stok(idDetailStok, idStok, idProduct,tglExpiredProduct,hargaProduct,transTypeProduct,kuantitasProduct) VALUES (?,?,?,?,?,?,?)",
                    randomUUIDString, idStok, product.getProductId(), product.getTglExpiredProduct(), product.getHarga(), product.getTransTypeProduct(), updateQty);
            jpa.update(("UPDATE tbl_product SET ProductQty=" + updateQty + " WHERE productId='" + product.getProductId() + "'"));
        }
    }
    public List<Stok> findAll() {
        List<Stok> stokList;
        stokList = jpa.query("Select * FROM tbl_header_stok",
                (rs, rowNum) ->
                        new Stok(
                                rs.getString("idStok"),
                                rs.getString("tanggalDokumen"),
                                rs.getString("deskripsiDokumen")
                        )
        );
        for (Stok ch : stokList) {
            ch.setProductList(jpa.query("SELECT * FROM tbl_detail_stok k, tbl_header_stok t, tbl_product a WHERE k.idProduct = a.productId AND k.idStok = t.idStok AND t.idStok =?",
                    preparedStatement -> preparedStatement.setString(1,ch.getIdStok()),
                    (rs, rowNum) ->
                            new Product(
                                    rs.getString("productId"),
                                    rs.getString("productName"),
                                    rs.getString("productDescription"),
                                    rs.getInt("ProductQty"),
                                    rs.getString("tglExpiredProduct"),
                                    rs.getInt("hargaProduct"),
                                    rs.getInt("transTypeProduct")
                            )));
        }
        return stokList;
    }
}
