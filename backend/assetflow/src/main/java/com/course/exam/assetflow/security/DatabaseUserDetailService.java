package com.course.exam.assetflow.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.course.exam.assetflow.model.User;

@Service
public class DatabaseUserDetailService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<User> userAttempt = userRepository.findByUsername(username);
    if (userAttempt.isEmpty()) {
      throw new UsernameNotFoundException("not found");
    }
    return new DatabaseUserDetail(userAttempt.get());
  }

}
