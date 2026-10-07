package com.course.exam.assetflow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.exam.assetflow.exception.NotFoundException;
import com.course.exam.assetflow.model.Machine;
import com.course.exam.assetflow.repository.MachineRepository;

@Service
public class MachineService {

  @Autowired
  private MachineRepository machineRepository;

  public List<Machine> findAllMachine() {
    return machineRepository.findAll();
  }

  public boolean machineExist(Integer id) {
    return machineRepository.existsById(id);
  }

  public Machine getMachineById(Integer id) {
    if (machineExist(id)) {
      return machineRepository.findById(id).get();
    }
    throw new NotFoundException(id);
  }

  public void setMachine(Machine machine) {
    machineRepository.save(machine);
  }

  public void deleteMachineById(Integer id) {
    Machine machineToDelete = getMachineById(id);
    machineRepository.delete(machineToDelete);
  }
}
