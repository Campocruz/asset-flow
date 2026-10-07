package com.course.exam.assetflow.exception;

public class NotFoundException extends RuntimeException {

  public NotFoundException(Integer id) {
    super("id " + id + " non trovato");
  }

}
