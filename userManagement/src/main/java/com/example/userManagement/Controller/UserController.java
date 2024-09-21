package com.example.userManagement.Controller;

import com.example.userManagement.Entity.User;
import com.example.userManagement.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(path = "/user")
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }

    @PostMapping(path = "/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping(path = "/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        User user = userService.getUserById(id);
        if (user != null) {
            updatedUser.setId(id); // Set the ID to ensure updating the correct user
            User updatedUserData = userService.updateUser(updatedUser);
            return new ResponseEntity<>(updatedUserData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(path = "/user/{id}")
    public void deleteUserById(@PathVariable int id) {
        userService.deleteUserById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User userCredentials) {
        String userDetails = userService.authenticateUser(userCredentials.getEmail(), userCredentials.getPassword());
        if (userDetails != null) {
            System.out.println("Access Granted");
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        } else {
            System.out.println("Access Denied");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
