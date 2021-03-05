package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.User;

import java.util.List;

public interface UserService {
    User findById(String idUser);
    User findByName(String username);
    User findByNameAll(String username);
    List<User> findAll();
    void saveUser(User user);
    void deleteUserById(String idUser);
    void updateUser(User user);
    boolean isUserExist(User user);
}
