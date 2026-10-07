package com.course.exam.assetflow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.exam.assetflow.model.Machine;

public interface MachineRepository extends JpaRepository<Machine, Integer> {

}
