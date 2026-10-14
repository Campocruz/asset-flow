package com.course.exam.assetflow.security;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Controller;
import org.springframework.web.cors.CorsConfiguration;

@Controller
@EnableWebSecurity
public class SecurityConfiguration {

  @Bean
  @SuppressWarnings("removal")
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.ignoringRequestMatchers("/api/**"))
        .cors(cors -> cors.configurationSource(request -> {
          CorsConfiguration config = new CorsConfiguration();
          config.setAllowedOrigins(List.of("http://localhost:5173")); // la tua origine React (5173 se usi Vite)
          config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
          config.setAllowedHeaders(List.of("*"));
          config.setAllowCredentials(true);
          return config;
        }))
        .authorizeHttpRequests(requests -> requests
            .requestMatchers("/buildings/create", "/buildings/edit/**").hasAuthority("ADMIN")
            .requestMatchers(HttpMethod.POST, "/buildings/**").hasAuthority("ADMIN")
            .requestMatchers("/departments/create", "/departments/edit/**").hasAuthority("ADMIN")
            .requestMatchers(HttpMethod.POST, "/departments/**").hasAuthority("ADMIN")
            .requestMatchers("/machines/create", "/machines/edit/**").hasAllAuthorities("ADMIN", "USER")
            .requestMatchers(HttpMethod.POST, "/machines/**").hasAllAuthorities("ADMIN", "USER")
            .requestMatchers("/api/v1/**").permitAll()
            .requestMatchers("/", "/dashboard", "/css/**", "/js/**", "/error").permitAll()
            .anyRequest().authenticated())
        .formLogin(Customizer.withDefaults())
        .logout(Customizer.withDefaults());
    return http.build();
  }

  @Bean
  @SuppressWarnings("deprecation")
  DaoAuthenticationProvider authenticationProvider(DatabaseUserDetailService userDetailService,
      PasswordEncoder passwordEncoder) {
    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(userDetailService);

    authProvider.setPasswordEncoder(passwordEncoder);
    return authProvider;
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return PasswordEncoderFactories.createDelegatingPasswordEncoder();
  }

}
