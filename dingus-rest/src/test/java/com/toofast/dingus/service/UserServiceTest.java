package com.toofast.dingus.service;

import com.toofast.dingus.entity.User;
import com.toofast.dingus.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class UserServiceTest {

    @Mock
    private static UserRepository userRepository;

    @InjectMocks
    private static UserService userService = new UserService();

    @Test
    public void testCreateUser() {
        User returnedEntity;
        User entity = new User();
        entity.setUsername("a");
        entity.setEncrypted_pass("b");
        entity.setFirst_name("c");
        entity.setLast_name("d");
        when(userRepository.save(entity))
                .thenReturn(entity);
        returnedEntity = userService.createUser(entity);
        Assertions.assertEquals(entity, returnedEntity);
    }

    @Test
    public void testFindStudentById() {
        User returnedEntity;
        User entity = new User();
        entity.setUsername("a");
        entity.setEncrypted_pass("b");
        entity.setFirst_name("c");
        entity.setLast_name("d");
        when(userRepository.findByUsername(entity.getUsername()))
                .thenReturn(entity);
        returnedEntity = userService.getUserByUsername(entity.getUsername());
        Assertions.assertEquals(entity, returnedEntity);
    }

}
