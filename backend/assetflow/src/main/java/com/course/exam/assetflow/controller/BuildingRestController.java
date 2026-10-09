package com.course.exam.assetflow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.exam.assetflow.model.Building;
import com.course.exam.assetflow.service.BuildingService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/buildings")
public class BuildingRestController {

  @Autowired
  private BuildingService buildingService;

  @GetMapping
  public List<Building> index() {
    return buildingService.findAllBuilding();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Building> show(@PathVariable Integer id) {
    if (buildingService.buildingExist(id)) {
      return new ResponseEntity<>(buildingService.getBuildingById(id), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PostMapping
  public ResponseEntity<Building> store(@Valid @RequestBody Building building) {
    return new ResponseEntity<>(buildingService.setBuilding(building), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Building> update(@Valid @RequestBody Building building, @PathVariable Integer id) {
    building.setId(id);
    if (buildingService.buildingExist(id)) {
      return new ResponseEntity<>(buildingService.setBuilding(building), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Building> delete(@PathVariable Integer id) {
    if (buildingService.buildingExist(id)) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    buildingService.deleteBuildingById(id);
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
