package com.course.exam.assetflow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.exam.assetflow.exception.BuildingNotFoundException;
import com.course.exam.assetflow.model.Building;
import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.repository.BuildingRepository;
import com.course.exam.assetflow.repository.DepartmentRepository;

@Service
public class BuildingService {

  @Autowired
  private BuildingRepository buildingRepository;

  @Autowired
  private DepartmentRepository departmentRepository;

  public List<Building> findAllBuilding() {
    return buildingRepository.findAll();
  }

  public boolean buildingExist(Integer id) {
    return buildingRepository.existsById(id);
  }

  public Building getBuildingById(Integer id) {
    if (buildingExist(id)) {
      return buildingRepository.findById(id).get();
    }
    throw new BuildingNotFoundException(id);
  }

  public void setBuilding(Building building) {
    buildingRepository.save(building);
  }

  public void deleteBuilding(Integer id) {
    Building buildingToDelete = getBuildingById(id);
    List<Department> departmentToDelete = buildingToDelete.getDepartments();
    for (Department depart : departmentToDelete) {
      departmentRepository.delete(depart);
    }
    buildingRepository.delete(buildingToDelete);
  }
}
