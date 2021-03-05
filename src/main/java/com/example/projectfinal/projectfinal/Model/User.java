package com.example.projectfinal.projectfinal.Model;

import javax.validation.constraints.*;

public class User {
    private String idUser;
    @NotBlank(message = "username may not be blank")
    @Size(max = 8, min= 6)
    @Pattern(regexp="[a-zA-Z0-9.\\\\-_]{0,}",message="Username harus terdiri dari minimal 6 huruf, tidak boleh menggunakan spasi, dan tidak boleh memiliki spesial karakter")
    private String username;
    @Email(message = "Enter the correct email format")
    private String email;
    @NotBlank(message = "password may not be null")
    @Size(max=8, min = 6)
    @Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&+=]).{0,}$",message="Password harus terdiri dari 8 character atau lebih dengan huruf besar dan kecil, angka dan memiliki special character")
    private String password;

    public User(String idUser, String username, String email, String password) {
        this.idUser = idUser;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
