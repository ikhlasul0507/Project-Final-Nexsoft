package com.example.projectfinal.projectfinal.Service;

import com.example.projectfinal.projectfinal.Model.User;
import com.example.projectfinal.projectfinal.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    PasswordEncoder encoder = new BCryptPasswordEncoder();

    public List<User> findAll() {
        List<User> users = userRepository.findAll();
        return users;
    }
    public User findById(String idUser) {
        User dh;
        try{
            dh = userRepository.findById(idUser);
        }catch (EmptyResultDataAccessException e){
            System.out.println(e);
            dh = null;
        }
        return dh;
    }
    @Override
    public User findByNameAll(String username) {
        User dh;
        try{
            dh = userRepository.findByNameAll(username);
        }catch (EmptyResultDataAccessException e){
            System.out.println(e);
            dh = null;
        }
        return dh;
    }
    @Override
    public User findByName(String username) {
        return (User) userRepository.findByName(username).get(0);
    }

    public void saveUser(User user) {
        synchronized (this) {
            user.setPassword(encoder.encode(user.getPassword()));
            userRepository.saveUser(user);
        }
    }

    public void updateUser(User user) {
        synchronized (this) {
            user.setPassword(encoder.encode(user.getPassword()));
            userRepository.updateUser(user);
        }
    }

    public void deleteUserById(String idUser) {
        synchronized (this) {
            userRepository.deleteUserById(idUser);
        }
    }
    public boolean isUserExist(User user){
        return userRepository.findByName(user.getUsername()).size() != 0;
    }
    
}


