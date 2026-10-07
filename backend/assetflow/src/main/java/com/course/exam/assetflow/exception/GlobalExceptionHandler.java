package com.course.exam.assetflow.exception;

import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(BuildingNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String handleBuildingNotFound(BuildingNotFoundException ex, Model model) {
    model.addAttribute("errorMessage", ex.getMessage());
    return "error/notFound";
  }

}
