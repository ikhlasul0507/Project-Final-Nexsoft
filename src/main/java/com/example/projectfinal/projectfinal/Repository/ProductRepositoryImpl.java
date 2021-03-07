package com.example.projectfinal.projectfinal.Repository;
import com.example.projectfinal.projectfinal.Model.Product;
import com.example.projectfinal.projectfinal.Model.Stok;
import com.example.projectfinal.projectfinal.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository("ProductRepository")
public class ProductRepositoryImpl  implements  ProductRepository{
    @Autowired
    private JdbcTemplate jpa;
    private Stok stok;
    public String getLastID() {
        int countUser;
        String lastId;
        countUser = jpa.queryForObject("SELECT COUNT(*) as count FROM tbl_product", Integer.class);

        if (countUser == 0){
            lastId = "PROD0000";
        }else{
            lastId = jpa.queryForObject("SELECT productId FROM tbl_product LIMIT 1 OFFSET " + (countUser - 1), String.class);
        }

        return lastId;
    }

    public String getLastIDDOC() {
        int countUser;
        String lastIdDOC;
        countUser = jpa.queryForObject("SELECT COUNT(*) as count FROM tbl_header_stok", Integer.class);
        if (countUser == 0){
            lastIdDOC = "STOK0000";
        }else{
            lastIdDOC = jpa.queryForObject("SELECT idStok FROM tbl_header_stok LIMIT 1 OFFSET " + (countUser - 1), String.class);
        }
        return lastIdDOC;
    }

    public void saveProduct(Product product) {
        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();

        String lastID = getLastID();
        int lastNumber = Integer.parseInt(lastID.substring(4)) + 1;
        String number = String.valueOf(lastNumber).length() == 1 ? "000"+String.valueOf(lastNumber) :
                String.valueOf(lastNumber).length() == 2 ? "00"+String.valueOf(lastNumber) :
                        String.valueOf(lastNumber).length() == 3 ? "0"+String.valueOf(lastNumber) : String.valueOf(lastNumber);
        String idProduct = new String("PROD" + number );

        String lastIDDOC = getLastIDDOC();
        int lastNumberDoc = Integer.parseInt(lastIDDOC.substring(4)) + 1;
        String numberDoc = String.valueOf(lastNumberDoc).length() == 1 ? "000"+String.valueOf(lastNumberDoc) :
                String.valueOf(lastNumberDoc).length() == 2 ? "00"+String.valueOf(lastNumberDoc) :
                        String.valueOf(lastNumberDoc).length() == 3 ? "0"+String.valueOf(lastNumberDoc) : String.valueOf(lastNumberDoc);
        String idStok = new String("STOK" + numberDoc );


        jpa.update("INSERT INTO tbl_product (productId,productName, productDescription, productQty) VALUES (?,?,?,?)",
                idProduct,product.getProductName(),product.getProductDescription(),product.getProductQty() );
        jpa.update("INSERT INTO tbl_header_stok(idStok,tanggalDokumen, deskripsiDokumen) VALUES (?,?,?)",
                idStok,new Date(),"");
        jpa.update("INSERT INTO tbl_detail_stok(idDetailStok, idStok, idProduct,tglExpiredProduct,hargaProduct,transTypeProduct,kuantitasProduct) VALUES (?,?,?,?,?,?,?)",
                randomUUIDString,idStok,idProduct,null,null,null,null);
    }

    public List<Product> findByName(String productName){
        return jpa.query("Select * FROM tbl_product where productName like ?",
                new Object[]{"%"+productName+"%"},
                (rs, rowNum)->
                        new Product(
                                rs.getString("productId"),
                                rs.getString("productName"),
                                rs.getString("productDescription"),
                                rs.getInt("ProductQty")
                        )
        );
    }
    public List<Product> findByNameProduct(String productName){
        return jpa.query("Select * FROM tbl_product where productName like ?",
                new Object[]{"%"+productName+"%"},
                (rs, rowNum)->
                        new Product(
                                rs.getString("productId"),
                                rs.getString("productName"),
                                rs.getString("productDescription"),
                                rs.getInt("ProductQty")
                        )
        );
    }
    public List<Product> findAll() {
        List<Product> productList;
        productList = jpa.query("Select * FROM tbl_product",
                (rs, rowNum) ->
                        new Product(
                                rs.getString("productId"),
                                rs.getString("productName"),
                                rs.getString("productDescription"),
                                rs.getInt("ProductQty")
                        )
        );
        return productList;
    }
    public Product findById(String productId) {
        String sql = "select * from tbl_product WHERE productId='" + productId + "'";
        return jpa.queryForObject(sql,
                (rs, rowNum) ->
                        new Product(
                                rs.getString("productId"),
                                rs.getString("productName"),
                                rs.getString("productDescription"),
                                rs.getInt("ProductQty")
                        )
        );
    }
    public void deleteProductById(String productId) {
        jpa.execute(" DELETE FROM tbl_product WHERE productId='" + productId + "'");
    }
    public void updateProduct(Product product) {
        jpa.update("UPDATE tbl_product SET productName= ?,productDescription=? Where productId=?",
                product.getProductName(), product.getProductDescription(), product.getProductId());
    }
}
