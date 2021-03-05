package com.example.projectfinal.projectfinal.Repository;

import com.example.projectfinal.projectfinal.Model.User;

import java.util.List;

public interface UserRepository {
    User findById(String idUser);
    List<User> findByName(String username);
    User findByNameAll(String username);
    List<User> findAll();
    void saveUser(User user);
    void deleteUserById(String idUser);
    void updateUser(User user);
}
