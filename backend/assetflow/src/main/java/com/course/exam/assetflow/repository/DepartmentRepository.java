package com.course.exam.assetflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.exam.assetflow.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}
