package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("UserRepository")
public class UserRepositoryImpl implements UserRepository {
    @Autowired
    private JdbcTemplate jpa;

    public List<User> findAll() {
        return jpa.query("select * from tbl_user",
                (rs, rowNum) ->
                        new User(
                                rs.getString("idUser"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("password")
                        )
        );
    }

    // Add new customer
    public void saveUser(User user) {
        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
        String username = user.getUsername();
        jpa.update("INSERT INTO tbl_user (idUser,username,email,password) VALUES (?,?,?,?)",
                randomUUIDString, username, user.getEmail(), user.getPassword());
    }

    // update new customer
    public void updateUser(User user) {
        jpa.update("UPDATE tbl_user SET username= ?,email=?,password=? Where idUser=?",
                user.getUsername(), user.getEmail(), user.getPassword(), user.getIdUser());
    }

    public User findById(String idUser) {
        String sql = "select * from tbl_user WHERE idUser='" + idUser + "'";
        return jpa.queryForObject(sql,
                (rs, rowNum) ->
                        new User(
                                rs.getString("idUser"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("password")
                        )
        );
    }

    public User findByNameAll(String username) {

        String sql = "select * from tbl_user WHERE username='" + username + "'";
        return jpa.queryForObject(sql,
                (rs, rowNum) ->
                        new User(
                                rs.getString("idUser"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("password")
                        )
        );
    }

    public List<User> findByName(String username) {
        return jpa.query("Select * FROM tbl_user where username='"+username+"'",
                (rs, rowNum) ->
                        new User(
                                rs.getString("idUser"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("password")
                        )
        );
    }

    public void deleteUserById(String idUser) {
        jpa.execute(" DELETE FROM tbl_user WHERE idUser='" + idUser + "'");
    }
}
