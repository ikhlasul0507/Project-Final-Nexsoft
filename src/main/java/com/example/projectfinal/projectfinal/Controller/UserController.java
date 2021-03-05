package com.example.projectfinal.projectfinal.Controller;

import com.example.projectfinal.projectfinal.Model.User;
import com.example.projectfinal.projectfinal.Service.UserService;
import com.example.projectfinal.projectfinal.Util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("nd6")
public class UserController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    UserService userService;
    PasswordEncoder encoder = new BCryptPasswordEncoder();
    //get all user
    @RequestMapping(value = "/user/", method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllUser() {
        List<User> users = userService.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(users, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
    }

    //get user by id
    @RequestMapping(value = "/user/{idUser}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable("idUser") String idUser) {
        logger.info("Fetching user with id User {}", idUser);
        User user = userService.findById(idUser);
        if (user == null) {
            logger.error("user with iduser Harga {} not found .", idUser);
            return new ResponseEntity<>(new CustomErrorType("user with id " + idUser + " not found"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }

    //get all user by name
    @RequestMapping(value = "/user/nama/{username}", method = RequestMethod.GET)
    public ResponseEntity<?> getUserByName(@PathVariable("username") String username) {
        logger.info("Fetching user with name {}", username);
        User user = userService.findByNameAll(username);
        if (user == null) {
            logger.error("user with name {} not found.", username);
            return new ResponseEntity<>(new CustomErrorType("user with name " + username + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //insert user
    @PostMapping("/user")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
        if (userService.isUserExist(user)) {
            logger.error("Unable to create, user already exist", user.getUsername());
            return new ResponseEntity<>(new CustomErrorType("Unable to create, user already" + user.getUsername()), HttpStatus.CONFLICT);
        } else {
            userService.saveUser(user);
            return new ResponseEntity<>("Data Berhasil Di Simpan", HttpStatus.OK);
        }
    }


    //delete user by id
    @RequestMapping(value = "/user/{idUser}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("idUser") String idUser) {
        logger.info("Fetching & Deleting user with id User {}", idUser);
        if (idUser == null) {
            return new ResponseEntity<>(new CustomErrorType("id User not found."),
                    HttpStatus.NOT_FOUND);
        } else {
            User user = userService.findById(idUser);
            if (user == null) {
                logger.error("Unable to delete. user with id {} not found.", idUser);
                return new ResponseEntity<>(new CustomErrorType("Unable to delete. user with id user " + idUser + " not found."),
                        HttpStatus.NOT_FOUND);
            } else {
                userService.deleteUserById(idUser);
                return new ResponseEntity<>("Data Berhasil Di Hapus", HttpStatus.OK);
            }
        }
    }

    //update user by id
    @RequestMapping(value = "/user/{idUser}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("idUser") String idUser, @RequestBody User user) {
        logger.info("Updating user with id {}", idUser);
        User currentUser = userService.findById(idUser);
        System.out.println("password" + user.getPassword());
        if (currentUser == null) {
            logger.error("Unable to update. user with id {} not found.", idUser);
            return new ResponseEntity<>(new CustomErrorType("Unable to upate. user with id " + idUser + " not found."),
                    HttpStatus.NOT_FOUND);
        } else if (user.getUsername() == "") {
            return new ResponseEntity<>(new CustomErrorType("user name not null"),
                    HttpStatus.NOT_FOUND);
        } else if (user.getEmail() == "") {
            return new ResponseEntity<>(new CustomErrorType("user email not null"),
                    HttpStatus.NOT_FOUND);
        } else if (user.getPassword() == "") {
            return new ResponseEntity<>(new CustomErrorType("user password not null"),
                    HttpStatus.NOT_FOUND);
        } else {
            currentUser.setUsername(user.getUsername());
            currentUser.setEmail(user.getEmail());
            currentUser.setPassword(user.getPassword());

            userService.updateUser(currentUser);
            return new ResponseEntity<>(currentUser, HttpStatus.OK);
        }
    }
    @PostMapping("/user/auth")
    public ResponseEntity<?> auth (@RequestParam Map<Object, Object> params){
        if (params.isEmpty()){
            return new ResponseEntity<>("Data post tidak sesuai", HttpStatus.BAD_REQUEST);
        }else{
            if (params.containsKey("username") && !String.valueOf(params.get("username")).isBlank()) {
                User user = userService.findByNameAll(String.valueOf(params.get("username")));
                if (user != null){
                    if (params.containsKey("password") && !String.valueOf(params.get("password")).isBlank()){
                        if (encoder.matches((CharSequence) params.get("password"), user.getPassword())){
                            return new ResponseEntity<>(user, HttpStatus.OK);
                        }else{
                            return new ResponseEntity<>(new CustomErrorType("Password Wrong !"), HttpStatus.NOT_FOUND);
                        }
                    }else{
                        return new ResponseEntity<>(new CustomErrorType("Please input your password !"), HttpStatus.BAD_REQUEST);
                    }
                }else {
                    return new ResponseEntity<>(new CustomErrorType("Username not found !"), HttpStatus.NOT_FOUND);
                }
            }else{
                new ResponseEntity<>(new CustomErrorType("Please input your username"), HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(new CustomErrorType("Please input username and password "), HttpStatus.BAD_REQUEST);
        }
    }

}

