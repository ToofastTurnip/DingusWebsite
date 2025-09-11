package com.toofast.dingus.service;

import com.toofast.dingus.entity.User;
import com.toofast.dingus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

    public User createUser(User user) {
        User checkedUser = dennisChecker(user);
        return userRepository.save(checkedUser);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    private User dennisChecker(User user) {
        try {
            if (user.getFirst_name().equalsIgnoreCase("dennis")) {
                user.setFirst_name("Dr. Stinky");
            }
        } catch(NullPointerException e) {
            System.out.println("Dangit, nullpointer exception my dude");
            return new User();
        }
        return user;
    }
}
