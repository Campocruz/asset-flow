package com.course.exam.assetflow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.exam.assetflow.exception.NotFoundException;
import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.repository.DepartmentRepository;

@Service
public class DepartmentService {

  @Autowired
  private DepartmentRepository departmentRepository;

  public List<Department> findAllDepartment() {
    return departmentRepository.findAll();
  }

  public boolean departmentExist(Integer id) {
    return departmentRepository.existsById(id);
  }

  public Department getDepartmentById(Integer id) {
    if (departmentExist(id)) {
      return departmentRepository.findById(id).get();
    }
    throw new NotFoundException(id);
  }

  public void setDepartment(Department department) {
    departmentRepository.save(department);
  }

  public void deleteDepartmentById(Integer id) {
    Department departmentToDelete = getDepartmentById(id);
    departmentRepository.delete(departmentToDelete);
  }
}
