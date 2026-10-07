package com.course.exam.assetflow.exception;

public class BuildingNotFoundException extends RuntimeException {

  public BuildingNotFoundException(Integer id) {
    super("Building con id " + id + " non trovato");
  }

}
