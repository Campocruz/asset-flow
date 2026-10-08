package com.course.exam.assetflow.security;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.exam.assetflow.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
  Optional<User> findByUsername(String username);
}
