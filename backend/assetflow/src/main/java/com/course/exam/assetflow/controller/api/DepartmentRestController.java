package com.course.exam.assetflow.controller.api;

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

import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.service.DepartmentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/departments")
public class DepartmentRestController {

  @Autowired
  private DepartmentService departmentService;

  @GetMapping
  public List<Department> index() {
    return departmentService.findAllDepartment();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Department> show(@PathVariable Integer id) {
    if (departmentService.departmentExist(id)) {
      return new ResponseEntity<>(departmentService.getDepartmentById(id), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PostMapping
  public ResponseEntity<Department> store(@Valid @RequestBody Department department) {
    return new ResponseEntity<>(departmentService.setDepartment(department), HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Department> update(@Valid @RequestBody Department department, @PathVariable Integer id) {
    department.setId(id);
    if (departmentService.departmentExist(id)) {
      return new ResponseEntity<>(departmentService.setDepartment(department), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Department> delete(@PathVariable Integer id) {
    if (departmentService.departmentExist(id)) {
      departmentService.deleteDepartmentById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
