package com.course.exam.assetflow.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.course.exam.assetflow.model.Role;
import com.course.exam.assetflow.model.User;

public class DatabaseUserDetail implements UserDetails {

  private final Integer id;
  private final String email;
  private final String username;
  private final String password;
  private final Set<GrantedAuthority> authorities;

  public DatabaseUserDetail(User user) {
    this.id = user.getId();
    this.email = user.getEmail();
    this.username = user.getUserName();
    this.password = user.getPassword();
    this.authorities = new HashSet<>();

    for (Role role : user.getRoles()) {
      this.authorities.add(new SimpleGrantedAuthority(role.getName()));
    }
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities;
  }

  @Override
  public @Nullable String getPassword() {
    return this.password;
  }

  @Override
  public String getUsername() {
    return this.username;
  }

}
